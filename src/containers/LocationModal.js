import React, { Component } from 'react';
import  { connect } from 'react-redux';
import { setLocation, changePage, setSkyCoords } from '../actions';
import { googleKey } from '../helpers/apiKey.js';
import NavBar from './NavBar.js';
import { calculateRA } from '../helpers/starCoords.js';
import { colors } from '../assets/colors.js';
import { 
  StyleSheet, 
  TextInput, 
  View, 
  Text, 
  TouchableHighlight 
} from 'react-native';

class LocationModal extends Component {
  constructor(props) {
    super(props);
    this.state = {
      text: ''
    };
  };

  getGeolocation = (nextPage) => {
    navigator.geolocation.getCurrentPosition(({coords}) => {
      const lat = coords.latitude.toFixed(3);
      const lon = coords.longitude.toFixed(3);
      const location = {lat, lon};
      const skyCoords = calculateRA(lat, lon);

      this.props.setLocation(location);
      this.props.setSkyCoords(skyCoords);
      this.props.changePage(nextPage);
    });
  };

  handleSearchLocation = async (nextPage) => {
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
      const skyCoords = calculateRA(lat, lon);
      
      this.setState({text: ''});
      this.props.setLocation(location);
      this.props.setSkyCoords(skyCoords);
      this.props.changePage(nextPage);
    }
  };

  render() {
    const nextPage = this.props.currentPage === 'LocationModalTonight'
      ? 'TonightsSky'
      : 'StarMap';

    return (
      <View style={styles.mainContainer}>
        <View style={styles.modalContainer}>
          <Text style={styles.modalTitle}>
            Finding Your Night Sky
          </Text>
          <View style={styles.inputContainer}> 
            <TouchableHighlight 
              style={styles.modalButton}
              onPress={() => this.getGeolocation(nextPage)}>
              
              <Text style={styles.modalButtonText}>
                Use Current Location
              </Text>
            </TouchableHighlight>
            <View>
              <TextInput
                style = {styles.modalTextInput}
                value={this.state.text}
                placeholder='City, State'
                onChangeText={(text) => this.setState({text})}
              />
              <TouchableHighlight 
                style={styles.modalButton}
                onPress={() => this.handleSearchLocation(nextPage)}>

                <Text style={styles.modalButtonText}>
                  Set New Location
                </Text>
              </TouchableHighlight>
            </View>
          </View>
        </View>
        <NavBar />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    alignContent: 'center',
    justifyContent: 'center'
  },
  modalContainer: {
    alignSelf: 'center',
    backgroundColor: colors.$white,
    borderColor: colors.$redPurple,
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
    backgroundColor: colors.$lavender,
    borderColor: colors.$lavender,
    borderRadius: 25,
    borderWidth: 2,
    padding: 10
  },
  modalButtonText: {
    fontSize: 20
  },
  modalTextInput: {
    borderColor: colors.$redPurple,
    borderWidth: 1,
    fontSize: 20,
    padding: 10,
    marginBottom: 10
  }
});

const mapStateToProps = state => ({
  currentPage: state.page
});

const mapDispatchToProps = dispatch => ({
  setLocation: (location) => {
    dispatch(setLocation(location));
  },
  changePage: (page) => {
    dispatch(changePage(page));
  },
  setSkyCoords: (skyCoords) => {
    dispatch(setSkyCoords(skyCoords));
  }
});

export default connect(mapStateToProps, mapDispatchToProps)(LocationModal);


