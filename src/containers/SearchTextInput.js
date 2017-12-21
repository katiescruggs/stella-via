import React, { Component } from 'react';
import { StyleSheet, AppRegistry, TextInput, View, Text } from 'react-native';
import getLocation from '../helpers/getLocation.js';
import getDate from '../helpers/getDate.js';

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
    const location = await getLocation();
    console.log(location);
    this.setState({lat: location.lat, lon: location.lon});
  }

  render() {
    let day, month, date, year;
    let lat, lon;

    let text = this.state.text;

    if(this.state.lat && this.state.lon) {
      lat = this.state.lat;
      lon = this.state.lon;
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
        <Text style={styles.p}>{`at latitude: ${lat}, longitude: ${lon}`}</Text>
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

export default SearchTextInput;