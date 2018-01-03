import React, { Component } from 'react';
import { StyleSheet, View, Text, TextInput, TouchableHighlight } from 'react-native';
import NavBar from './NavBar.js';
import { colors } from '../assets/colors';
import constellations from '../../constellations/constellations';
import CardContainer from './CardContainer';

class Search extends Component {
  constructor(props) {
    super(props);
    this.state = {
      text: '',
      matchConstellations: null
    }
  }

  handleSearch = () => {
    const matchConstellations = constellations.filter(constellation => {
      return constellation.name.includes(this.state.text);
    });
    this.setState({matchConstellations});
  }

  render () {
    const displayConstellations = this.state.matchConstellations 
      ? <CardContainer constellations={this.state.matchConstellations} />
      : null;

    return (
      <View style={styles.container}>
        <View style={styles.header}>
          <Text style={styles.searchTitle}>Search</Text>
        </View>
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
        {displayConstellations}
        <NavBar />
      </View>
    );
  }
} 

const styles = StyleSheet.create({
  searchTitle: {
    color: colors.$white,
    fontSize: 35,
    paddingTop: 30
  },
  header: {
    backgroundColor: colors.$purple,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 10
  },
  container: {
    height: '100%',
    backgroundColor: colors.$darkPurple
  },
  textInput: {
    backgroundColor: colors.$white,
    borderColor: colors.$redPurple,
    borderWidth: 1,
    fontSize: 20,
    padding: 10,
    marginTop: 10,
    marginBottom: 10,
    width: '70%'
  },
  button: {
    alignSelf: 'flex-end',
    backgroundColor: colors.$lavender,
    borderColor: colors.$lavender,
    borderRadius: 25,
    borderWidth: 2,
    marginBottom: 10,
    padding: 10
  },
  buttonText: {
    fontSize: 20
  }
});

export default Search;