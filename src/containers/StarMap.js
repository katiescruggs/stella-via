import React from 'react';
import { connect } from 'react-redux';
import { StyleSheet, AppRegistry, WebView, View, Text } from 'react-native';
import NavBar from './NavBar.js';

const StarMap = () => {
  return (
    <View style={{flex: 1, paddingTop: 100}}>
      <WebView
        source={{uri: 'http://server1.sky-map.org/skywindow?ra=8&dec=45&show_constellation_lines=1&zoom=10&img_source=SDSS'}}
        style={{backgroundColor: 'magenta'}}
      />
      <NavBar />
    </View>
  )
}

export default connect(null, null)(StarMap);