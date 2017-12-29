import React from 'react';
import { View, Text } from 'react-native';
import NavBar from './NavBar.js';

const Search = () => (
  <View style={{height: '100%', paddingTop: 100}}>
    <Text>I am a search component! :)</Text>
    <NavBar />
  </View>
);

export default Search;