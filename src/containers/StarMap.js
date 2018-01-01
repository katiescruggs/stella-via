import React from 'react';
import { connect } from 'react-redux';
import { StyleSheet, WebView, View, Text } from 'react-native';
import NavBar from './NavBar';
import NavButton from '../components/NavButton';
import { colors } from '../assets/colors';

const StarMap = ({ lat, lon, dec, RA }) => {
  const arrayRA = RA.split(' ');
  const formattedRA = `${arrayRA[0]}h, ${arrayRA[1]}m, ${arrayRA[2]}s`;
  const path = `http://server1.sky-map.org/skywindow?ra=${arrayRA[0]} ${arrayRA[1]} ${arrayRA[2]}&dec=${dec}&zoom=8&img_source=SDSS`;

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.titleText}>Star Map</Text>
        <NavButton 
          path={require('../assets/icons/location.png')}
          name={null}
          pageRoute='LocationModalMap'
          small={true}
        />
      </View>
      <View style={styles.coordsBanner}>
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
      />
      <NavBar />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1, 
    backgroundColor: colors.$purple,
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 10
  },
  titleText: {
    color: colors.$white,
    paddingTop: 30,
    fontSize: 35
  },
  coordsBanner: {
    backgroundColor: colors.$transparentDarkPurple,
    flexDirection: 'row',
    justifyContent: 'space-between',
    padding: 5,
  },
  earthCoordsText: {
    color: colors.$white,
    fontSize: 14,
  },
  starCoordsText: {
    color: colors.$white,
    fontSize: 14,
    textAlign: 'right'
  }
});

const mapStateToProps = state => ({
  lat: state.location.lat,
  lon: state.location.lon,
  dec: state.skyCoords.dec,
  RA: state.skyCoords.stringRA
});

export default connect(mapStateToProps, null)(StarMap);