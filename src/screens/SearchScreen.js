import React, { useState } from 'react';
import { View, Text, StyleSheet } from 'react-native';

import SearchBar from '../components/SearchBar';
import useResults from '../hooks/useResults';

const SearchScreen = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [searchApi, results, error] = useResults();

  return (
    <View>
      <SearchBar
        searchTerm={searchTerm}
        // Shorthand for defining a function '(newTerm) => getSearchTerm(newTerm)' 
        onSearchTermChange={setSearchTerm}
        // Shorthand for defining a function '() => searchApi()'
        onSearchTermSubmit={(term) => searchApi(term)}
      />
      {error ? <Text style={styles.errorMessage}>{error}</Text> : null}
      <Text>We've found {results.length} results</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  errorMessage: {
    color: 'red'
  }
});

export default SearchScreen;