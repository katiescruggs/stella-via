import React from 'react';
import { View, Text } from 'react-native';
import NavBar from './NavBar.js';
import { WebView } from 'react-native';


const Search = () => (
  <View style={{height: '100%', paddingTop: 100}}>
    <Text>I am a search component! :)</Text>
    <WebView
        source={{uri: 'http://server1.sky-map.org/skywindow?ra=8&dec=45&show_constellation_lines=1&zoom=10&img_source=SDSS'}}
        style={{width: '100%'}}
      />
    <NavBar />
  </View>
);

export default Search;