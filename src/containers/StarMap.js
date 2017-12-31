import React from 'react';
import { connect } from 'react-redux';
import { StyleSheet, AppRegistry, WebView, View, Text } from 'react-native';
import NavBar from './NavBar.js';

const StarMap = ({ lat, lon, dec, RA }) => {
  //side-real time math!!

  const arrayRA = RA.split(' ');
  const formattedRA = `${arrayRA[0]}h, ${arrayRA[1]}m, ${arrayRA[2]}s`;


  const path = `http://server1.sky-map.org/skywindow?ra=${RA}&dec=${dec}&zoom=8&img_source=SDSS`;

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
          <Text style={styles.starCoordsText}>{`Right Acension: ${formattedRA}`}</Text>
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
  lon: state.location.lon,
  dec: state.skyCoords.dec,
  RA: state.skyCoords.stringRA
});

export default connect(mapStateToProps, null)(StarMap);