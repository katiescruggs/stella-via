import React, { Component } from 'react';
import { StyleSheet, AppRegistry, ImageBackground, TextInput, View, Text, Button, Image, TouchableHighlight } from 'react-native';
import NavButton from './NavButton.js';
import { connect } from 'react-redux';
import { changePage } from '../actions';

const Welcome = (props) => {
  const buttons = [
    'Search', 
    'Tonight\'s Sky', 
    'Daily Image', 
    'Login'
  ];

  const paths = [
    require('../assets/search.png'),
    require('../assets/planet.png'),
    require('../assets/photo.png'),
    require('../assets/user.png'),
  ];

  const pages = [
    'Search',
    props.location ? 'TonightsSky' : 'LocationModalTonight',
    'APOD',
    'User'
  ];

  const navButtons = buttons.map((name, index) => {
    return (
      <NavButton 
        key={`nav-btn-${index}`}
        name={name}
        path={paths[index]}
        page={pages[index]}
      />
    )
  });

  return (
    <ImageBackground source={require('../assets/star-background.jpg')} style={styles.container}>
      <Image style={styles.mainTitle} source={require('../assets/stella-via-logo-white.png')}/>
      {/*<Text style={styles.mainTitle}>Stella Via</Text>*/}
      <View style={styles.nav}>
      {navButtons}
      </View>
    </ImageBackground>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'space-around',
    alignItems: 'center',
    width: '100%'
  },
  mainTitle: {
    marginTop: 70,
    width: '100%',    
    height: 180
  },
  nav: {
    borderRadius: 50,
    flexDirection: 'row',
    flexWrap: 'wrap',
    borderWidth: 5,
    borderColor: '#fff',
    justifyContent: 'center',
    alignItems: 'center',
    paddingBottom: 25,
    paddingTop: 30,
    marginBottom: 20,
  }
});

const mapStateToProps = state => ({
  location: state.location
});

const mapDispatchToProps = dispatch => ({
  changePage: (page) => {
    dispatch(changePage(page));
  }
});

export default connect(mapStateToProps, mapDispatchToProps)(Welcome);

