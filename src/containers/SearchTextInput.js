import React, { Component } from 'react';
import { StyleSheet, AppRegistry, TextInput, View, Text, Button, Image, TouchableHighlight } from 'react-native';
import getDate from '../helpers/getDate.js';
import  { connect } from 'react-redux';
import { setLocation, setTime } from '../actions';
import { googleKey } from '../helpers/apiKey.js';

class SearchTextInput extends Component {
  constructor(props) {
    super(props);
    this.state = {
      text: ''
    };
  }

  async componentDidMount() {
    const now = getDate();
    this.props.setTime(now);

    await this.getData();
  }

  async getData() {
    navigator.geolocation.getCurrentPosition(async ({coords}) => {
      const lat = coords.latitude.toFixed(3);
      const lon = coords.longitude.toFixed(3);

      const placeFetch = await fetch(`https://maps.googleapis.com/maps/api/geocode/json?latlng=${lat},${lon}&key=${googleKey}`);
      const placeResult = await placeFetch.json();

      const cityStateCountry = placeResult.results[3].formatted_address.split(', ');
      const city = cityStateCountry[0];
      const state = cityStateCountry[1];

      const location = { lat, lon, city, state };

      this.props.setLocation(location);
    });
  }

  onPress = () => {
    console.log('pressed');
  }

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
      this.props.setLocation(location);
      this.setState({text: ''});
    }
  }

  render() {
    let text = this.state.text;
    let {lat, lon, city, state} = this.props.location;
    let {day, month, date, year} = this.props.now;

    const latLon = (lat && lon) ? `${lat}\xB0, ${lon}\xB0` : null;
    const cityState = (city && state) ? `${city}, ${state}` : 'finding your location...';

    return (
      <View style={styles.container}>
        <View style={styles.hamburger}></View>
        <Image source={require('../assets/hamburger.png')} style={styles.hamburger}/>
        <Text style={styles.h1}>Stella Via</Text>
        {/*<Text style={styles.h2}>Your Night Sky</Text>*/}
        <Text style={styles.p}>{`${day}, ${month} ${date}, ${year}`}</Text>
        <Text style={styles.p}>{cityState}</Text>
        <Text style={styles.p}>{latLon}</Text>

        <View style={styles.buttonContainer}>
          <TouchableHighlight style={styles.mainButton} onPress={this.onPress} activeOpacity={0.7} underlayColor={'white'}>
            <Text>change location</Text>
          </TouchableHighlight>
          <TouchableHighlight style={styles.mainButton} onPress={this.onPress}>
            <Text>your sky</Text>
          </TouchableHighlight>
        </View>


        {/*<TextInput 
                  style={styles.input}
                  value={text}
                  placeholder='Search for a different location.'
                  onChangeText={(text) => this.setState({text})}
                />
                <Button
                  onPress={this.handleSearchLocation} 
                  title="search"></Button>*/}
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#9999FF',
    padding: 10,
    paddingTop: 50,
    alignItems: 'center',
    justifyContent: 'center',
    alignSelf: 'stretch'
  },
  h1: {
    fontSize: 60
  },
  h2: {
    fontSize: 24
  },
  input: {
    fontSize: 18,
    textDecorationColor: '#FFCC66',
    width: 300,
    padding: 10
  },
  p: {
    fontSize: 16
  },
  hamburger: {
    padding: 0,
    marginTop: -20,
    width: 30,
    height: 30,
    alignSelf: 'flex-end'
  },
  buttonContainer: {
    flex: 1,
    flexDirection: 'row'
  },
  mainButton: {
    borderRadius: 25,
    borderColor: 'white',
    borderWidth: 2,
    padding: 10,
    margin: 10
  }
});

const mapStateToProps = state => ({
  location: state.location,
  now: state.now
});

const mapDispatchToProps = dispatch => {
  return {
    setLocation: (location) => {
      dispatch(setLocation(location));
    },
    setTime: (now) => {
      dispatch(setTime(now));
    }
  }
};

export default connect(mapStateToProps, mapDispatchToProps)(SearchTextInput);