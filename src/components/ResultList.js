import React from 'react';
import { withNavigation } from 'react-navigation';
import { View, Text, StyleSheet, FlatList, TouchableOpacity } from 'react-native';

import ResultsDetail from './ResultsDetail';

const ResultList = ({ title, results, navigation }) => {

  if (!results.length) {
    return null;
  }

  return (
    <View style={styles.container}>
      <Text style={styles.title}>{title}</Text>
      <FlatList 
        // this is the same as horizontal={true}
        horizontal
        data={results}
        showsHorizontalScrollIndicator={false}
        keyExtractor={(result) => result.id}
        // item is result object, there are a few other things in there
        renderItem={({ item }) => {
          return (
            <TouchableOpacity onPress={() => navigation.navigate('Detail', {id: item.id})}>
              <ResultsDetail result={item} />
            </TouchableOpacity>
          )
        }}
      />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    marginBottom: 10
  },
  title: {
    fontSize: 18,
    fontWeight: 'bold',
    marginLeft: 15,
    marginBottom: 5
  }
});

export default withNavigation(ResultList);