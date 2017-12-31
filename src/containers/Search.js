import React from 'react';
import { StyleSheet, View, Text } from 'react-native';
import NavBar from './NavBar.js';


const Search = () => (
  <View style={styles.container}>
    <Text>I am a search component! :)</Text>
    <NavBar />
  </View>
);

const styles = StyleSheet.create({
  container: {
    height: '100%', 
    paddingTop: 100
  }
});

export default Search;