import React, { Component } from 'react';
import { StyleSheet, AppRegistry, TextInput, View, Text, Button, Image, TouchableHighlight } from 'react-native';
import  { connect } from 'react-redux';
import { setLocation } from '../actions';
import { googleKey } from '../helpers/apiKey.js';

class LocationModal extends Component {
  constructor(props) {
    super(props);
    this.state = {
      text: ''
    };
  };

  async componentDidMount() {
    await this.getGeolocation();
  }

  getGeolocation = () => {
    navigator.geolocation.getCurrentPosition(({coords}) => {
      const lat = coords.latitude.toFixed(3);
      const lon = coords.longitude.toFixed(3);
      const location = {lat, lon};
      this.props.setLocation(location);
    });
  }

  render() {
    return (
      <View style={styles.modalContainer}>
        <Text>Finding Your Night Sky...</Text>
        <TouchableHighlight>
          <Text>Use Current Location</Text>
        </TouchableHighlight>
        <TextInput
          value={this.state.text}
          placeholder='City, State'
          onChangeText={(text) => this.setState({text})}
        />
        <TouchableHighlight onPress={this.handleSearchLocation}>
          <Text>Set Location</Text>
        </TouchableHighlight>
      </View>
    );
  }
}

const styles = {
  modalContainer: {
    position: 'fixed',
    top: '100',
    backgroundColor: 'magenta'
  }
}

export default LocationModal;


