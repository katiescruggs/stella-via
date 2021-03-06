import React from 'react';
import PropTypes from 'prop-types';
import { StyleSheet, View } from 'react-native';
import  { connect } from 'react-redux';
import NavButton from './NavButton';
import { colors } from '../assets/colors';

export const NavBar = (props) => {
  const navRouteData = {
    'Tonight': {
      source: require('../assets/icons/night-sky.png'),
      pageRoute: props.location ? 'TonightsSky' : 'LocationModalTonight'
    }, 
    'Star Map': {
      source: require('../assets/icons/star-map.png'),
      pageRoute: props.location ? 'StarMap' : 'LocationModalMap'
    }, 
    'Daily Pic': {
      source: require('../assets/icons/photo.png'),
      pageRoute: 'APOD'
    },
    'Explore': {
      source: require('../assets/icons/search.png'),
      pageRoute: 'Search'
    },
    'Light Map': {
      source: require('../assets/icons/light-bulb.png'),
      pageRoute: 'LightMap'
    }
  };

  const navButtons = Object.keys(navRouteData).map((name, index) => {
    const active = props.page === navRouteData[name].pageRoute;

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
};

const styles = StyleSheet.create({
  container: {
    padding: 5,
    backgroundColor: colors.$purple,
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    position: 'absolute',
    bottom: 0
  }
});

export const mapStateToProps = state => ({
  location: state.location,
  page: state.page
});

export default connect(mapStateToProps, null)(NavBar);

NavBar.propTypes = {
  location: PropTypes.object,
  page: PropTypes.string,
};
