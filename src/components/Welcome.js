import React from 'react';
import { StyleSheet, ImageBackground, View, Image } from 'react-native';
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
    require('../assets/night-sky.png'),
    require('../assets/observatory.png'),
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
    );
  });

  return (
    <ImageBackground source={require('../assets/star-background.jpg')} style={styles.container}>
      <Image style={styles.mainTitle} source={require('../assets/stella-via-logo-gradient.png')}/>
      {/*<Text style={styles.mainTitle}>Stella Via</Text>*/}
      <View style={styles.nav}>
        {navButtons}
      </View>
    </ImageBackground>
  );
};

const $white = '#fff';
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
    height: 200
  },
  nav: {
    borderRadius: 50,
    flexDirection: 'row',
    flexWrap: 'wrap',
    borderWidth: 5,
    borderColor: $white,
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

