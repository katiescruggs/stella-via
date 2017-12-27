import React, { Component } from 'react';
import { StyleSheet, AppRegistry, TextInput, View, Text } from 'react-native';
import getDate from '../helpers/getDate.js';
import  { connect } from 'react-redux';
import { setLocation } from '../actions';

class SearchTextInput extends Component {
  constructor(props) {
    super(props);
    this.state = {
      text: ''
    };
  }

  async componentDidMount() {
    const now = getDate();
    this.setState({now});

    await this.getData();
  }

  async getData() {
    navigator.geolocation.getCurrentPosition(({coords}) => {
      const location = {
        lat: (Math.floor(coords.latitude * 100) / 100).toString() + '\xB0' + ', ',
        lon: (Math.floor(coords.longitude * 100) / 100).toString() + '\xB0'
      };
      this.props.setLocation(location);
      //this.setState({lat: location.lat, lon: location.lon})
    });
  }

  render() {
    let day, month, date, year;
    let lat, lon;

    let text = this.state.text;

    if(true) {
      lat = this.props.lat;
      lon = this.props.lon;
    }

    if(this.state.now) {
      day = this.state.now.day;
      month = this.state.now.month;
      date = this.state.now.date;
      year = this.state.now.year;
    }

    return (
      <View style={styles.container}>
        <Text style={styles.h1}>Stella Via</Text>
        <Text style={styles.h2}>Your Night Sky</Text>
        <Text style={styles.p}>{`${day}, ${month} ${date}, ${year}`}</Text>
        <Text style={styles.p}>{`at ${lat} ${lon}`}</Text>
        <TextInput 
          style={styles.input}
          value={text}
          placeholder='Search for a different location.'
          onChangeText={(text) => this.setState({text})}
        />
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
  lat: state.location.lat,
  lon: state.location.lon
});

const mapDispatchToProps = dispatch => {
  return {
    setLocation: (location) => {
      dispatch(setLocation(location));
    }
  }
};

export default connect(mapStateToProps, mapDispatchToProps)(SearchTextInput);