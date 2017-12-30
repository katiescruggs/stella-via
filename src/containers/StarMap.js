import React from 'react';
import { connect } from 'react-redux';
import { StyleSheet, AppRegistry, WebView, View, Text } from 'react-native';
import NavBar from './NavBar.js';

const StarMap = ({ lat, lon }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Star Map</Text>
      <Text style={styles.coords}>{`Latitude: ${lat}\xb0, Longitude: ${lon}\xb0`}</Text>
      <Text style={styles.coords}>Right Acension: 5hrs, Declination: 5&deg;</Text>
      <WebView
        scalesPageToFit={false}
        source={{uri: 'http://server1.sky-map.org/skywindow?ra=5&dec=5&zoom=8&img_source=SDSS'}}
        style={styles.webView}
      />
      <NavBar />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1, 
  },
  webView: {
    backgroundColor: 'magenta',
  },
  title: {
    textAlign: 'center',
    paddingTop: 70,
    fontSize: 28
  },
  coords: {
    textAlign: 'center',
    fontSize: 14,
    margin: 10
  }
})

const mapStateToProps = state => ({
  lat: state.location.lat,
  lon: state.location.lon
});

export default connect(mapStateToProps, null)(StarMap);