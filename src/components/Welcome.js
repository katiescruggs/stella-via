import React, { Component } from 'react';
import { StyleSheet, AppRegistry, TextInput, View, Text, Button, Image, TouchableHighlight } from 'react-native';

const Welcome = (props) => {
  handlePress = () => {
    console.log('pressed')
  } 

  return (
    <View style={styles.container}>
      <Text style={styles.mainTitle}>Stella Via</Text>
      <View style={styles.nav}>

        <TouchableHighlight style={styles.navIcon} onPress={handlePress}>
          <View style={styles.iconWrapper}> 
            <Text style={styles.navText}>Search</Text>
            <Image source={require('../assets/hamburger.png')}/>
          </View>
        </TouchableHighlight>

        <TouchableHighlight style={styles.navIcon} onPress={handlePress}>
          <View style={styles.iconWrapper}> 
            <Text style={styles.navText}>Tonight's Sky</Text>
            <Image source={require('../assets/hamburger.png')}/>
          </View>
        </TouchableHighlight>

        <TouchableHighlight style={styles.navIcon} onPress={handlePress}>
          <View style={styles.iconWrapper}> 
            <Text style={styles.navText}>Image of the Day</Text>
            <Image source={require('../assets/hamburger.png')}/>
          </View>
        </TouchableHighlight>

        <TouchableHighlight style={styles.navIcon} onPress={handlePress}>
          <View style={styles.iconWrapper}> 
            <Text style={styles.navText}>Login</Text>
            <Image source={require('../assets/hamburger.png')}/>
          </View>
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
  iconWrapper: {
    justifyContent: 'center',
    alignItems: 'center'
  },
  navIcon: {
    height: 100, 
    width: 100,
    backgroundColor: 'grey',
    borderRadius: 20,
    justifyContent: 'center',
    alignItems: 'center',
    margin: 20,
  },
  navText: {
    textAlign: 'center'

  }
}

export default Welcome;