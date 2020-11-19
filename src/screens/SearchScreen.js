import React, { useState } from 'react';
import { View, Text, StyleSheet } from 'react-native';

import SearchBar from '../components/SearchBar';
import yelp from '../api/yelp';

const SearchScreen = () => {
  const [searchTerm, setSearchTerm] = useState('');
  // good names would be businesses setBusinesses as it's in the api
  const [results, setResults] = useState([]);
  const [error, setError] = useState('');

  const searchApi = async () => {
    try {
      const response = await yelp.get('/search', {
        params: {
          limit: 50,
          term: searchTerm,
          location: 'san jose'
        }
      });
      setResults(response.data.businesses);
      // In case we're retrying we want to remove the error messages
      setError('');
    } catch (err) {
      setError('Something went wrong')
    }
  };

  return (
    <View>
      <SearchBar
        searchTerm={searchTerm}
        // Shorthand for defining a function '(newTerm) => getSearchTerm(newTerm)' 
        onSearchTermChange={setSearchTerm}
        // Shorthand for defining a function '() => searchApi()'
        onSearchTermSubmit={searchApi}
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