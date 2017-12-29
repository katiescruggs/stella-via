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
          <Text style={styles.skyTitle}>Tonight's Sky</Text>
          <Forecast />
          <Text style={styles.constellationsTitle}>{`Constellations For ${lat}\xb0, ${lon}\xb0`}</Text>
          <CardContainer />
        </ScrollView>
        <NavBar />
      </View>
    );
  }
};

const styles = {
  constellationsContainer: {
    paddingTop: 50
  },
  skyTitle: {
    fontSize: 34
  },
  constellationsTitle: {
    fontSize: 20,
    marginBottom: 10
  }
}

const mapStateToProps = state => ({
  lat: state.location.lat,
  lon: state.location.lon
});

export default connect(mapStateToProps, null)(TonightsSky);

