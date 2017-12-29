import React, { Component } from 'react';
import { StyleSheet, AppRegistry, ImageBackground, TextInput, View, Text, Button, Image, TouchableHighlight } from 'react-native';
import { connect } from 'react-redux';
import { changePage } from '../actions';

const NavButton = (props) => {
  handlePress = () => {
    console.log('pressed');
    props.changePage('LocationModal');
  }

  return (
    <TouchableHighlight 
      style={styles.navIcon} 
      onPress={handlePress} 
      activeOpacity={0.3} 
      underlayColor={'#735290'}>
      <View style={styles.iconWrapper}> 
        <Text style={styles.navText}>{props.name}</Text>
        <Image source={props.path}/>
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
  }
});

const mapDispatchToProps = dispatch => ({
  changePage: (page) => {
    dispatch(changePage(page));
  }
});

export default connect(null, mapDispatchToProps)(NavButton);

