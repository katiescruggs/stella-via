import React, { Component } from 'react';
import { StyleSheet, AppRegistry, TextInput, View, Text, Button, Image, TouchableHighlight } from 'react-native';
import  { connect } from 'react-redux';
import NavButton from '../components/NavButton';

class NavBar extends Component {
  constructor(props) {
    super(props);
    this.state = {

    };
  };

  render() {
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

    const navButtons = buttons.map((name, index) => {
      return (
        <NavButton 
          key={`nav-btn-${index}`}
          name={name}
          path={paths[index]}
          navBar={true}
        />
      )
    })
    return (
      <View style={styles.container}>
        {navButtons}
      </View>
    )
  }
};

const styles = StyleSheet.create({
  container: {
    padding: 15,
    backgroundColor: '#735290',
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  }
})

export default connect(null, null)(NavBar);
