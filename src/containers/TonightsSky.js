import React, { Component } from 'react';
import { connect } from 'react-redux';
import { ScrollView, View, Text, TouchableHighlight } from 'react-native';
import CardContainer from './CardContainer.js';
import Forecast from '../components/Forecast.js';
import NavBar from './NavBar.js';

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
};

const styles = {
  constellationsContainer: {
    backgroundColor: 'rgb(40, 38, 64)',
    width: '100%',
    height: '100%'
  },
  titleContainer: {
    backgroundColor: '#735290',
  },
  skyTitle: {
    color: '#fff',
    fontSize: 35,
    textAlign: 'center',
    paddingTop: 35,
    paddingBottom: 5
  },
  constellationsTitle: {
    color: '#fff',
    fontSize: 20,
    marginBottom: 10
  }
}

const mapStateToProps = state => ({
  lat: state.location.lat,
  lon: state.location.lon
});

export default connect(mapStateToProps, null)(TonightsSky);

