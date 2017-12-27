import React, { Component } from 'react';
import { StyleSheet, AppRegistry, TextInput, View, Text, Button } from 'react-native';
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

    const latLon = (lat && lon) ? `at ${lat} ${lon}` : null;
    const cityState = (city && state) ? `in ${city}, ${state}` : 'finding your location...';

    return (
      <View style={styles.container}>
        <Text style={styles.h1}>Stella Via</Text>
        <Text style={styles.h2}>Your Night Sky</Text>
        <Text style={styles.p}>{`${day}, ${month} ${date}, ${year}`}</Text>
        <Text style={styles.p}>{cityState}</Text>
        <Text style={styles.p}>{latLon}</Text>
        <TextInput 
          style={styles.input}
          value={text}
          placeholder='Search for a different location.'
          onChangeText={(text) => this.setState({text})}
        />
        <Button
          onPress={this.handleSearchLocation} 
          title="search"></Button>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#9999FF',
    padding: 50,
    alignItems: 'center',
    justifyContent: 'center',
    width: 420,
  },
  h1: {
    fontSize: 40
  },
  h2: {
    fontSize: 24
  },
  input: {
    fontSize: 18,
    // textDecorationColor: '#FFCC66',
    width: 300,
    // borderColor: '#FFCC66',
    // borderWidth: 2,
    padding: 10
  },
  p: {
    fontSize: 16
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