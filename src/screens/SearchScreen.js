import React, { useState } from 'react';
import { View, Text, StyleSheet, ScrollView } from 'react-native';

import SearchBar from '../components/SearchBar';
import useResults from '../hooks/useResults';
import ResultList from '../components/ResultList';

const SearchScreen = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [searchApi, results, error] = useResults();

  const filterResultsByPrice = (price) => {
    // price === '$' || '$$' || '$$$'
    return results.filter(results => {
      return results.price === price;
    });
  };

  return (
    <>
      <SearchBar
        searchTerm={searchTerm}
        // Shorthand for defining a function '(newTerm) => getSearchTerm(newTerm)' 
        onSearchTermChange={setSearchTerm}
        // Shorthand for defining a function '() => searchApi()'
        onSearchTermSubmit={() => searchApi(searchTerm)}
      />
      {error ? <Text style={styles.errorMessage}>{error}</Text> : null}
      <ScrollView>
        <ResultList
          title='Great Prices' 
          results={filterResultsByPrice('$')}

        />
        <ResultList
          title='Pricy'
          results={filterResultsByPrice('$$')}
        />
        <ResultList
          title='Fancy'
          results={filterResultsByPrice('$$$')}
        />
        <ResultList
          title='Okay...'
          results={filterResultsByPrice('$$$$')}
        />
      </ScrollView>
    </>
  );
};

const styles = StyleSheet.create({
  errorMessage: {
    color: 'red'
  }
});

export default SearchScreen;