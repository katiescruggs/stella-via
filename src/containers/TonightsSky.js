import React, { Component } from 'react';
import { connect } from 'react-redux';
import { StyleSheet, ScrollView, View, Text, TouchableHighlight } from 'react-native';
import CardContainer from './CardContainer.js';
import Forecast from '../components/Forecast.js';
import NavBar from './NavBar.js';
import { colors } from '../assets/colors';

class TonightsSky extends Component {
  render() {
    const { lat, lon } = this.props;

    return (
      <View style={styles.constellationsContainer}>
        <ScrollView>
          <View style={styles.titleContainer}>
            <Text style={styles.skyTitle}>Tonight's Sky</Text>
          </View>
          <Forecast />
          <Text style={styles.constellationsTitle}>
            {`Constellations For ${lat}\xb0, ${lon}\xb0`}
          </Text>
          <CardContainer />
        </ScrollView>
        <NavBar />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  constellationsContainer: {
    backgroundColor: colors.$darkPurple,
    width: '100%',
    height: '100%'
  },
  titleContainer: {
    backgroundColor: colors.$purple,
  },
  skyTitle: {
    color: colors.$white,
    fontSize: 35,
    textAlign: 'center',
    paddingTop: 35,
    paddingBottom: 5
  },
  constellationsTitle: {
    color: colors.$white,
    fontSize: 20,
    marginBottom: 10
  }
});

const mapStateToProps = state => ({
  lat: state.location.lat,
  lon: state.location.lon
});

export default connect(mapStateToProps, null)(TonightsSky);

