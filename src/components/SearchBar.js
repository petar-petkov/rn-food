import React from 'react';
import { View, TextInput, StyleSheet } from 'react-native';
import { Ionicons } from '@expo/vector-icons'; 

const SearchBar = ({ searchTerm, onSearchTermChange, onSearchTermSubmit }) => {

  return (
    <View style={styles.backgroundStyle}>
      <Ionicons name="ios-search" style={styles.iconStyle} />
      <TextInput
        autoCapitalize="none"
        autoCorrect={false}
        style={styles.inputStyle}
        placeholder="Search"
        value={searchTerm}
        // shorthand for this is without the arrow function ie just onSearchTermChange || onSearchSubmit
        onChangeText={(newSearchTerm) => onSearchTermChange(newSearchTerm)}
        onEndEditing={() => onSearchTermSubmit()}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  backgroundStyle: {
    backgroundColor: '#dedfe0',
    height: 50,
    borderRadius: 5,
    marginHorizontal: 15,
    flexDirection: 'row',
    marginTop: 15,
    marginBottom: 10
  },
  inputStyle: {
    flex: 1,
    fontSize: 18
  },
  iconStyle: {
    fontSize: 35,
    color: 'black',
    alignSelf: "center",
    marginHorizontal: 15
  }
});

export default SearchBar;