import React, { Component } from 'react';
import  { connect } from 'react-redux';
import { setLocation, changePage, setSkyCoords } from '../actions';
import NavBar from './NavBar.js';
import { fetchLocationCoords } from '../helpers/fetchLocationCoords';
import { getCityState } from '../helpers/getCityState';
import { calculateRA } from '../helpers/starCoords';
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

export class LocationModal extends Component {
  constructor(props) {
    super(props);
    this.state = {
      text: '',
      geolocation: true,
      validLocation: true,
      nextPage: this.props.currentPage === 'LocationModalTonight'
        ? 'TonightsSky'
        : 'StarMap'
    };
  }

  getGeolocation = () => {
    navigator.geolocation.getCurrentPosition(async ({coords}) => {
      const lat = coords.latitude.toFixed(3);
      const lon = coords.longitude.toFixed(3);

      const skyCoords = calculateRA(lat, lon);
      const { city, state } = await getCityState(lat, lon);
      const location = {lat, lon, city, state};

      this.setAllLocations(location, skyCoords);
    });
  }

  setAllLocations = (location, skyCoords) => {
    this.props.setLocation(location);
    this.props.setSkyCoords(skyCoords);
    this.props.changePage(this.state.nextPage);
  }

  checkGeolocation = () => {
    if(navigator.geolocation) {
      this.getGeolocation();
    } else {
      this.setState({geolocation: false});
    }
  };

  handleSearchLocation = async () => {
    if(this.state.text) {
      try {
        const [city, state] = this.state.text.split(', ');
        const { location, skyCoords } = await fetchLocationCoords(city, state);
        
        this.setState({text: ''});
        this.setAllLocations(location, skyCoords);
      }
      catch (error) {
        this.setState({validLocation: false, text: ''});
      }
    }
  };

  render() {
    const currentLocation = this.state.geolocation 
      ? <TouchableHighlight 
        style={styles.modalButton}
        onPress={() => this.checkGeolocation()}>
              
        <Text style={styles.modalButtonText}>
          Use Current Location
        </Text>
      </TouchableHighlight>
      : <View style={styles.modalButton}>
        <Text style={styles.errorText}>
          Unable to access current location. Please enter a location below.
        </Text>
      </View>;

    const errorMessage = this.state.validLocation 
      ? null
      : <View style={styles.modalButton}>
        <Text style={styles.errorText}>
          Location not found. Please enter a valid location.
        </Text>
      </View>; 

    return (
      <ImageBackground 
        source={require('../assets/star-background.jpg')} 
        style={styles.mainContainer}>

        <View style={styles.modalContainer}>
          <Text style={styles.modalTitle}>
            Finding Your Night Sky
          </Text>
          <View style={styles.inputContainer}> 
            {currentLocation}
            {errorMessage}
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
                  underlineColorAndroid='transparent'
                  placeholderTextColor={colors.$transparentPurple}
                  onChangeText={(text) => this.setState({text})}
                />
              </View>
              <TouchableHighlight 
                style={styles.modalButton}
                onPress={() => this.handleSearchLocation()}>

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
    width: '100%'
  },
  modalContainer: {
    alignSelf: 'center',
    marginTop: 50,
    padding: 20,
    width: '95%'
  },
  inputContainer: {
    justifyContent: 'space-between',
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
    backgroundColor: colors.$transparent,
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
    borderRadius: 10,
    padding: 10,
    width: '100%'
  },
  modalButtonText: {
    color: colors.$darkPurple,
    fontSize: 20,
    textAlign: 'center'
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
  errorText: {
    backgroundColor: colors.$purple,
    color: colors.$white,
    fontSize: 20,
    margin: -3,
    padding: 10,
    textAlign: 'center'
  }
});

export const mapStateToProps = state => ({
  currentPage: state.page
});

export const mapDispatchToProps = dispatch => ({
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


