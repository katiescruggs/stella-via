import React, { Component } from 'react';
import { StyleSheet, View } from 'react-native';
import  { connect } from 'react-redux';
import NavButton from '../components/NavButton';
import { colors } from '../assets/colors';

class NavBar extends Component {
  constructor(props) {
    super(props);
    this.state = {

    };
  }

  render() {
    const buttons = [
      'Search', 
      'Tonight\'s Sky',
      'Star Map', 
      'Daily Image', 
      'Login'
    ];

    const paths = [
      require('../assets/search.png'),
      require('../assets/night-sky.png'),
      require('../assets/star-map.png'),
      require('../assets/observatory.png'),
      require('../assets/user.png'),
    ];

    const pages = [
      'Search',
      this.props.location ? 'TonightsSky' : 'LocationModalTonight',
      this.props.location ? 'StarMap' : 'LocationModalMap',
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
          navBar={true}
        />
      );
    });

    return (
      <View style={styles.container}>
        {navButtons}
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    padding: 7,
    backgroundColor: colors.$purple,
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    position: 'absolute',
    bottom: 0
  }
});

const mapStateToProps = state => ({
  location: state.location
});

export default connect(mapStateToProps, null)(NavBar);
