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
    const navRouteData = {
      'Search': require('../assets/search.png'),
      'Tonight\'s Sky': require('../assets/night-sky.png'), 
      'Daily Image': require('../assets/star-map.png'), 
      'Login': require('../assets/observatory.png'), 
      'Star Map': require('../assets/user.png'), 
    };

    const pages = [
      'Search',
      this.props.location ? 'TonightsSky' : 'LocationModalTonight',
      this.props.location ? 'StarMap' : 'LocationModalMap',
      'APOD',
      'User'
    ];

    const navButtons = Object.keys(navRouteData).map((name, index) => {
      const active = this.props.page === pages[index] ? true : false;
      return (
        <NavButton 
          key={`nav-btn-${index}`}
          name={name}
          path={navRouteData[name]}
          pageRoute={pages[index]}
          small={true}
          active={active}
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
  location: state.location,
  page: state.page
});

export default connect(mapStateToProps, null)(NavBar);
