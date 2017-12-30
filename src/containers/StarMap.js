import React from 'react';
import { connect } from 'react-redux';
import { StyleSheet, AppRegistry, WebView, View, Text } from 'react-native';
import NavBar from './NavBar.js';

const StarMap = ({ lat, lon }) => {
  //side-real time math!!

  const ra = 5;
  const dec = 5;
  const path = `http://server1.sky-map.org/skywindow?ra=${ra}&dec=${dec}&zoom=8&img_source=SDSS`;

  return (
    <View style={styles.container}>
      <Text style={styles.titleText}>Star Map</Text>
      <View style={styles.coordsContainer}>
        <View>
          <Text style={styles.earthCoordsText}>{`Latitude: ${lat}\xb0`}</Text>
          <Text style={styles.earthCoordsText}>{`Longitude: ${lon}\xb0`}</Text>
        </View>
        <View>
          <Text style={styles.starCoordsText}>{`Declination: ${dec}\xb0`}</Text>
          <Text style={styles.starCoordsText}>{`Right Acension: ${ra}hrs`}</Text>
        </View>
      </View>
      <WebView
        scalesPageToFit={false}
        source={{uri: path}}
        style={styles.webView}
      />
      <NavBar />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1, 
    backgroundColor: '#735290',
  },
  webView: {
    borderColor: 'magenta',
    borderRadius: 50,
  },
  titleText: {
    color: '#fff',
    textAlign: 'center',
    paddingTop: 35,
    paddingBottom: 5,
    fontSize: 35
  },
  coordsContainer: {
    backgroundColor: 'rgba(40, 38, 64, 0.7)',
    flexDirection: 'row',
    justifyContent: 'space-between',
    padding: 5,
  },
  earthCoordsText: {
    color: '#fff',
    fontSize: 14,
  },
  starCoordsText: {
    color: '#fff',
    fontSize: 14,
    textAlign: 'right'
  }
})

const mapStateToProps = state => ({
  lat: state.location.lat,
  lon: state.location.lon
});

export default connect(mapStateToProps, null)(StarMap);