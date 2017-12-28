import React, { Component } from 'react';
import { connect } from 'react-redux';
import { View, Text, TouchableHighlight } from 'react-native';
import CardContainer from './CardContainer.js';

class Constellations extends Component {
  render() {
    const { lat, lon } = this.props;

    return (
      <View>
        <Text>Tonight's Sky</Text>
        <Text>{`Constellations For ${lat}, ${lon}`}</Text>
        <CardContainer />
      </View>
    );
  }
};

const mapStateToProps = state => ({
  lat: state.location.lat,
  lon: state.location.lon
});

export default connect(mapStateToProps, null)(Constellations);