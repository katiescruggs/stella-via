import React from 'react';
import PropTypes from 'prop-types';
import NavBar from './NavBar';
import { colors } from '../assets/colors';
import { 
  StyleSheet, 
  WebView, 
  View, 
  Text
} from 'react-native';

export const LightMap = () => {
  const map = require('../assets/light-pollution-data/dark.html');

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.titleText}>
          LIGHT POLLUTION MAP
        </Text>
      </View>
      {/*<LocationBanner />*/}
      <WebView 
        renderError={() => errorMessage}
        style={styles.webView}
        scalesPageToFit={true}
        source={map} />
      <NavBar />
    </View>
  );
}; 

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.$black,
    flex: 1, 
  },
  header: {
    backgroundColor: colors.$purple,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    padding: 0,
    zIndex: 9000
  },
  titleText: {
    color: colors.$white,
    paddingTop: 30,
    fontSize: 25
  },
  msgText: {
    color: colors.$white,
    fontSize: 30,
    marginTop: 50,
    textAlign: 'center'
  },
  webView: {
    marginBottom: 80
  }
});

LightMap.propTypes = {
  lat: PropTypes.string,
  lon: PropTypes.string
};