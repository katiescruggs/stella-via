import React, { Component } from 'react';
import { connect } from 'react-redux';
import { StyleSheet, ScrollView, View, Text } from 'react-native';
import CardContainer from './CardContainer';
import Forecast from '../components/Forecast';
import NavBar from './NavBar';
import NavButton from '../components/NavButton'
import { colors } from '../assets/colors';
import constellations from '../../constellations/constellations.js';

const TonightsSky = ({ lat, lon, RA, dec }) => {
  const rangeRA = [RA - 4, RA + 4];
  const rangeDec = [dec - 25, dec + 25];

  const matchConstellations = constellations.filter(constellation => {
    const { ra, dec } = constellation.coords;
    const matchRA = ra > rangeRA[0] && ra < rangeRA[1];
    const matchDec = dec > rangeDec[0] && dec < rangeDec[1];

    return matchRA && matchDec;
  });

  return (
    <View style={styles.constellationsContainer}>
      <ScrollView>
        <View style={styles.titleContainer}>
          <Text style={styles.skyTitle}>Tonight's Sky</Text>
          <NavButton 
            path={require('../assets/icons/location.png')}
            name={null}
            pageRoute='LocationModalTonight'
            small={true}
          />
        </View>
        <Forecast />
        <Text style={styles.constellationsTitle}>
          {`Constellations For ${lat}\xb0, ${lon}\xb0`}
        </Text>
        <CardContainer constellations={matchConstellations}/>
      </ScrollView>
      <NavBar />
    </View>
  );
}

const styles = StyleSheet.create({
  constellationsContainer: {
    backgroundColor: colors.$darkPurple,
    width: '100%',
    height: '100%'
  },
  titleContainer: {
    backgroundColor: colors.$purple,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 10
  },
  skyTitle: {
    color: colors.$white,
    fontSize: 35,
    textAlign: 'center',
    paddingTop: 30
  },
  constellationsTitle: {
    color: colors.$white,
    fontSize: 20,
    marginBottom: 10
  }
});

const mapStateToProps = state => ({
  lat: state.location.lat,
  lon: state.location.lon,
  RA: state.skyCoords.decimalRA,
  dec: state.skyCoords.dec
});

export default connect(mapStateToProps, null)(TonightsSky);

