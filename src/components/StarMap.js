import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import NavBar from './NavBar';
import { colors } from '../assets/colors';
import LocationBanner from './LocationBanner';
import { 
  StyleSheet, 
  WebView, 
  View, 
  Text, 
} from 'react-native';

export const StarMap = ({ dec, RA }) => {
  const path = `http://www.sky-map.org/?ra=${RA}&de=${dec}&zoom=2`;
  //const path = `http://server1.sky-map.org/skywindow?ra=${RA}&dec=${dec}&zoom=8&img_source=SDSS`;


  const errorMessage = 
    <Text style={styles.errorMessage}>
      404: Star Map cannot load.
    </Text>;

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.titleText}>
          STAR MAP
        </Text>
      </View>
      <LocationBanner />
      <WebView
        renderError={() => errorMessage}
        style={styles.webView}
        scalesPageToFit={true}
        source={{uri: path}}
      />
      <NavBar />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1, 
  },
  header: {
    backgroundColor: colors.$purple,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    padding: 0,
    zIndex: 9000
  },
  titleText: {
    color: colors.$white,
    paddingTop: 30,
    fontSize: 25
  },
  webView: {
    marginTop: -120,
    zIndex: -10
  },
  errorMessage: {
    fontSize: 20,
    marginTop: 50,
    textAlign: 'center'
  }
});

export const mapStateToProps = state => ({
  dec: state.skyCoords.dec,
  RA: state.skyCoords.stringRA
});

export default connect(mapStateToProps, null)(StarMap);

StarMap.propTypes = {
  dec: PropTypes.string,
  RA: PropTypes.string
};