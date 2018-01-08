import React from 'react';
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
        contentInset={{top: -50, left: 0, bottom: -5, right: -50}}
      />
      <NavBar />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1, 
    backgroundColor: colors.$purple,
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 10
  },
  titleText: {
    color: colors.$white,
    paddingTop: 30,
    fontSize: 30,
  },
  webView: {
    marginTop: 0
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