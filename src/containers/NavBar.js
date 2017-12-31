import React from 'react';
import { StyleSheet, View } from 'react-native';
import  { connect } from 'react-redux';
import NavButton from '../components/NavButton';
import { colors } from '../assets/colors';

const NavBar = (props) => {
  
  const navRouteData = {
    'Search': {
      source: require('../assets/search.png'),
      pageRoute: 'Search'
    },
    'Tonight\'s Sky': {
      source: require('../assets/night-sky.png'),
      pageRoute: props.location ? 'TonightsSky' : 'LocationModalTonight'
    }, 
    'Daily Image': {
      source: require('../assets/star-map.png'),
      pageRoute: props.location ? 'StarMap' : 'LocationModalMap'
    }, 
    'Login': {
      source: require('../assets/observatory.png'),
      pageRoute: 'APOD'
    }, 
    'Star Map': {
      source: require('../assets/user.png'),
      pageRoute: 'User'
    }, 
  };

  const navButtons = Object.keys(navRouteData).map((name, index) => {
    const active = props.page === navRouteData[name].pageRoute ? true : false;

    return (
      <NavButton 
        key={`nav-btn-${index}`}
        name={name}
        path={navRouteData[name].source}
        pageRoute={navRouteData[name].pageRoute}
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
