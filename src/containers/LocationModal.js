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
  Image,
  TouchableHighlight,
  ImageBackground 
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
      <ImageBackground 
        source={require('../assets/star-background.jpg')} 
        style={styles.mainContainer}>

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
              <View style={styles.inputWrapper}>
                <Image 
                  source={require('../assets/icons/location.png')}
                  style={styles.locationIcon}
                />
                <TextInput
                  style = {styles.modalTextInput}
                  value={this.state.text}
                  placeholder='City, State'
                  onChangeText={(text) => this.setState({text})}
                />
              </View>
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
      </ImageBackground>
    );
  }
}

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    alignContent: 'center',
    justifyContent: 'center',
    width: '100%'
  },
  modalContainer: {
    alignSelf: 'center',
    // borderColor: colors.$white,
    // borderRadius: 50,
    // borderWidth: 2,
    justifyContent: 'center',
    minHeight: 300,
    padding: 20,
    width: '95%'
  },
  inputContainer: {
    justifyContent: 'space-around',
    height: 300
  },
  inputWrapper: {
    borderRadius: 10,
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    backgroundColor: colors.$purple,
    marginBottom: 10, 
    padding: 3
  },
  locationIcon: {
    height: 32,
    width: 32,
    backgroundColor: colors.$purple,
  },
  modalTitle: {
    backgroundColor: 'transparent',
    color: colors.$white,
    fontSize: 28,
    fontWeight: 'bold',
    marginTop: 20,
    marginBottom: 20,
    textAlign: 'center'
  },
  modalButton: {
    alignSelf: 'center',
    backgroundColor: colors.$lavender,
    borderRadius: 25,
    padding: 15
  },
  modalButtonText: {
    color: colors.$darkPurple,
    fontSize: 20
  },
  modalTextInput: {
    backgroundColor: colors.$white,
    borderColor: colors.$purple,
    borderWidth: 4,
    color: colors.$darkPurple,
    fontSize: 20,
    padding: 10,
    width: '88%'
  },
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


