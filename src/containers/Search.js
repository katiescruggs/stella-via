import React, { Component } from 'react';
import { StyleSheet, View, Text, TextInput, TouchableHighlight } from 'react-native';
import NavBar from './NavBar.js';
import { colors } from '../assets/colors.js';

class Search extends Component {
  constructor(props) {
    super(props);
    this.state = {
      text: ''
    }
  }

  handleSearch = () => {
    console.log(this.state);
  }

  render () {
    return (
      <View style={styles.container}>
        <Text style={styles.searchTitle}>Search</Text>
        <TextInput
          style = {styles.textInput}
          value={this.state.text}
          placeholder='Search for a constellation.'
          onChangeText={(text) => this.setState({text})}
        />
        <TouchableHighlight 
          style={styles.button}
          onPress={this.handleSearch}>
          <Text style={styles.buttonText}>Search</Text>
        </TouchableHighlight>
        <NavBar />
      </View>
    );
  }
} 

const styles = StyleSheet.create({
  searchTitle: {
    alignSelf: 'center',
    fontSize: 30,
    marginBottom: 20
  },
  container: {
    height: '100%', 
    paddingTop: 100
  },
  textInput: {
    borderColor: colors.$redPurple,
    borderWidth: 1,
    fontSize: 20,
    padding: 10,
    marginBottom: 10
  },
  button: {
    alignSelf: 'center',
    backgroundColor: colors.$lavender,
    borderColor: colors.$lavender,
    borderRadius: 25,
    borderWidth: 2,
    padding: 10
  },
  buttonText: {
    fontSize: 20
  }
});

export default Search;