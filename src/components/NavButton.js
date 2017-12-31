import React from 'react';
import { StyleSheet, View, Text, Image, TouchableHighlight } from 'react-native';
import { connect } from 'react-redux';
import { changePage } from '../actions';

const NavButton = ({name, path, changePage, page, navBar}) => {
  handlePress = () => {
    changePage(page);
  };

  const navBarIcons = navBar ? 'smIcon' : null;
  const textStyle = navBar ? 'smText' : 'navText';
  const wrapper = navBar ? 'smWrapper' : 'iconWrapper';
  const navButton = navBar ? 'smButton' : 'navIcon';

  return (
    <TouchableHighlight 
      style={styles[navButton]} 
      onPress={handlePress} 
      activeOpacity={0.3} 
      underlayColor={'#735290'}>
    
      <View style={styles[wrapper]}> 
        <Image style={styles[navBarIcons]} source={path}/>
        <Text style={styles[textStyle]}>{name}</Text>
      </View>
    </TouchableHighlight>
  );
};

const $transparentDarkPurple = 'rgba(40, 38, 64, 0.7)';
const $btnShadow = 'rgba(0, 0, 0, 0.6)';
const white = '#fff';
const styles = StyleSheet.create({
  iconWrapper: {
    justifyContent: 'center',
    alignItems: 'center',
    height: 130, 
    width: 130,
  },
  navIcon: {
    borderRadius: 20,
    backgroundColor: $transparentDarkPurple,
    // backgroundColor: '#282640',
    justifyContent: 'center',
    alignItems: 'center',
    margin: 10,
    shadowColor: $btnShadow,
    shadowOffset: { width: 2, height: 10 },
    shadowOpacity: 0.8,
    shadowRadius: 2,
    elevation: 1
  },
  navText: {
    textAlign: 'center',
    fontSize: 18,
    color: white,
    fontWeight: 'bold',
    marginBottom: 4
  },
  smWrapper: {
    justifyContent: 'center',
    alignItems: 'center',
    height: 60, 
    width: 60,
  },
  smButton: {
    borderRadius: 20,
    backgroundColor: $transparentDarkPurple,
    // backgroundColor: '#282640',
    justifyContent: 'center',
    alignItems: 'center',
    margin: 5,
    shadowColor: $btnShadow,
    shadowOffset: { width: 2, height: 10 },
    shadowOpacity: 0.8,
    shadowRadius: 2,
    elevation: 1
  },
  smIcon: {
    height: 25, 
    width: 25,
  },
  smText: {
    textAlign: 'center',
    fontSize: 12,
    color: white,
    marginBottom: 4
  }
});

const mapDispatchToProps = dispatch => ({
  changePage: (page) => {
    dispatch(changePage(page));
  }
});

export default connect(null, mapDispatchToProps)(NavButton);

