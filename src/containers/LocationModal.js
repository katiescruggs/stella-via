import React, { Component } from 'react';
import { StyleSheet, AppRegistry, TextInput, View, Text, Button, Image, TouchableHighlight } from 'react-native';
import  { connect } from 'react-redux';
import { setLocation, changePage } from '../actions';
import { googleKey } from '../helpers/apiKey.js';

class LocationModal extends Component {
  constructor(props) {
    super(props);
    this.state = {
      text: ''
    };
  };

  getGeolocation = () => {
    navigator.geolocation.getCurrentPosition(({coords}) => {
      const lat = coords.latitude.toFixed(3);
      const lon = coords.longitude.toFixed(3);
      const location = {lat, lon};
      this.props.setLocation(location);
      this.props.changePage('TonightsSky');
    });
  };

  handleSearchLocation = async () => {
    const cityState = this.state.text.split(', ');
    const city = cityState[0];
    const state = cityState[1];

    if(this.state.text) {
      const coordsFetch = await fetch(`https://maps.googleapis.com/maps/api/geocode/json?address=${city},+${state}&key=${googleKey}`);
      const coordsResult = await coordsFetch.json();

      const coords = coordsResult.results[0].geometry.location;

      const lat = coords.lat.toFixed(3);
      const lon = coords.lng.toFixed(3);

      const location = {lat, lon, city, state};
      this.setState({text: ''});
      this.props.setLocation(location);
      this.props.changePage('TonightsSky');
    }
  };

  render() {
    return (
      <View style={styles.mainContainer}>
      <View style={styles.modalContainer}>
        <Text style={styles.modalTitle}>Finding Your Night Sky</Text>
        <View style={styles.inputContainer}> 
          <TouchableHighlight style={styles.modalButton}
            onPress={this.getGeolocation}>
            <Text style={styles.modalButtonText}>Use Current Location</Text>
          </TouchableHighlight>
          <View>
            <TextInput
              style = {styles.modalTextInput}
              value={this.state.text}
              placeholder='City, State'
              onChangeText={(text) => this.setState({text})}
            />
            <TouchableHighlight style={styles.modalButton}
              onPress={this.handleSearchLocation}>
              <Text style={styles.modalButtonText}>Set New Location</Text>
            </TouchableHighlight>
          </View>
        </View>
      </View>
      </View>
    );
  }
}

const styles = {
  mainContainer: {
    flex: 1,
    alignContent: 'center',
    justifyContent: 'center'
  },
  modalContainer: {
    alignSelf: 'center',
    backgroundColor: 'white',
    borderColor: '#502F4C',
    borderWidth: 7,
    justifyContent: 'center',
    minHeight: 300,
    padding: 20,
    width: '95%'
  },
  inputContainer: {
    justifyContent: 'space-between',
    height: 200
  },
  modalTitle: {
    alignSelf: 'center',
    fontSize: 30,
    marginBottom: 20
  },
  modalButton: {
    alignSelf: 'center',
    backgroundColor: '#C8B8DB',
    borderColor: '#C8B8DB',
    borderRadius: 25,
    borderWidth: 2,
    padding: 10
  },
  modalButtonText: {
    fontSize: 20
  },
  modalTextInput: {
    borderColor: '#502F4C',
    borderWidth: 1,
    fontSize: 20,
    padding: 10,
    marginBottom: 10
  }
};

const mapDispatchToProps = dispatch => ({
  setLocation: (location) => {
    dispatch(setLocation(location));
  },
  changePage: (page) => {
    dispatch(changePage(page));
  }
});

export default connect(null, mapDispatchToProps)(LocationModal);


