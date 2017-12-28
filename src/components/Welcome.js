import React, { Component } from 'react';
import { StyleSheet, AppRegistry, TextInput, View, Text, Button, Image, TouchableHighlight } from 'react-native';

const Welcome = (props) => {
  return (
    <View style={styles.container}>
      <Text style={styles.mainTitle}>Stella Via</Text>
      <View style={styles.nav}>
        <TouchableHighlight style={styles.navIcon}>
          <Image source={require('../assets/hamburger.png')}/>
        </TouchableHighlight>

        <TouchableHighlight style={styles.navIcon}>
          <Image source={require('../assets/hamburger.png')}/>
        </TouchableHighlight>

        <TouchableHighlight style={styles.navIcon}>
          <Image source={require('../assets/hamburger.png')}/>
        </TouchableHighlight>

        <TouchableHighlight style={styles.navIcon}>
          <Image source={require('../assets/hamburger.png')}/>
        </TouchableHighlight>
      </View>
    </View>
  )
}

const styles = {
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },
  mainTitle: {
    fontSize: 90,
    color: '#fff',
    margin: 20,
    textAlign: 'center'
  },
  nav: {
    borderRadius: 50,
    flexDirection: 'row',
    flexWrap: 'wrap',
    borderWidth: 5,
    borderColor: '#fff',
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
    margin: 20
  },
  navIcon: {
    height: 100, 
    width: 100,
    backgroundColor: 'grey',
    borderRadius: 20,
    justifyContent: 'center',
    alignItems: 'center',
    margin: 20
  }
}

export default Welcome;