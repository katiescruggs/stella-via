import React, { Component } from 'react';
import { connect } from 'react-redux';
import { StyleSheet, ScrollView, View, Text, TouchableHighlight } from 'react-native';
import CardContainer from './CardContainer';
import Forecast from '../components/Forecast';
import NavBar from './NavBar';
import NavButton from '../components/NavButton'
import { colors } from '../assets/colors';

class TonightsSky extends Component {
  render() {
    const { lat, lon } = this.props;

    return (
      <View style={styles.constellationsContainer}>
        <ScrollView>
          <View style={styles.titleContainer}>
            <Text style={styles.skyTitle}>Tonight's Sky</Text>
            <NavButton 
              path={require('../assets/location.png')}
              name={null}
              pageRoute='LocationModalTonight'
              small={true}
            />
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
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 10
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

