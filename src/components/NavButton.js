import React, { Component } from 'react';
import { StyleSheet, AppRegistry, ImageBackground, TextInput, View, Text, Button, Image, TouchableHighlight } from 'react-native';

const NavButton = (props) => {
  handlePress = () => {
    console.log('pressed')
  }

  const navBarIcons = props.navBar ? 'smIcon' : null;
  const textStyle = props.navBar ? 'smText' : 'navText';
  const wrapper = props.navBar ? 'smWrapper' : 'iconWrapper';
  const navButton = props.navBar ? 'smButton' : 'navIcon';

  return (
    <TouchableHighlight 
      style={styles[navButton]} 
      onPress={handlePress} 
      activeOpacity={0.3} 
      underlayColor={'#735290'}>
      <View style={styles[wrapper]}> 
        <Text style={styles[textStyle]}>{props.name}</Text>
        <Image style={styles[navBarIcons]} source={props.path}/>
      </View>
    </TouchableHighlight>
  )
}

const styles = StyleSheet.create({
  iconWrapper: {
    justifyContent: 'center',
    alignItems: 'center',
    height: 130, 
    width: 130,
  },
  navIcon: {
    borderRadius: 20,
    backgroundColor: 'rgba(40, 38, 64, 0.7)',
    // backgroundColor: '#282640',
    justifyContent: 'center',
    alignItems: 'center',
    margin: 10,
    shadowColor: 'rgba(0, 0, 0, 0.6)',
    shadowOffset: { width: 2, height: 10 },
    shadowOpacity: 0.8,
    shadowRadius: 2,
    elevation: 1
  },
  navText: {
    textAlign: 'center',
    fontSize: 18,
    color: '#fff',
    fontWeight: 'bold',
    marginBottom: 4
  },
  smWrapper: {
    justifyContent: 'center',
    alignItems: 'center',
    height: 80, 
    width: 80,
  },
  smButton: {
    borderRadius: 20,
    backgroundColor: 'rgba(40, 38, 64, 0.7)',
    // backgroundColor: '#282640',
    justifyContent: 'center',
    alignItems: 'center',
    margin: 5,
    shadowColor: 'rgba(0, 0, 0, 0.6)',
    shadowOffset: { width: 2, height: 10 },
    shadowOpacity: 0.8,
    shadowRadius: 2,
    elevation: 1
  },
  smIcon: {
    height: 40, 
    width: 40,
  },
  smText: {
    textAlign: 'center',
    fontSize: 12,
    color: '#fff',
    // fontWeight: 'bold',
    marginBottom: 4
  }
})

export default NavButton;