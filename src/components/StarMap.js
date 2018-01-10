import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import NavBar from './NavBar';
import { colors } from '../assets/colors';
import LocationBanner from './LocationBanner';
import { Location } from 'expo';
import { 
  StyleSheet, 
  WebView, 
  View, 
  Text, 
} from 'react-native';

// import RNSimpleCompass from 'react-native-simple-compass';

// const degree_update_rate = 3; // Number of degrees changed before the callback is triggered
// RNSimpleCompass.start(degree_update_rate, (degree) => {
//   console.log('You are facing', degree);
//   RNSimpleCompass.stop();
// });

let location = null;

const getNorth = async () => {
  console.log('getNorth running');
  location = await Expo.Location.getHeadingAsync();
  console.log(location)
}


export const StarMap = ({ lat, lon }) => {
  getNorth();
  const path = `https://virtualsky.lco.global/embed/?longitude=${lon}&latitude=${lat}&projection=stereo&keyboard=false&constellations=true&constellationlabels=true&showstarlabels=true&showdate=false&showposition=false&gridlines_az=true&live=true&az=0`

  const errorMessage = 
    <Text style={styles.errorMessage}>
      404: Star Map cannot load.
    </Text>;

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.titleText}>
          STAR MAP
          {location && 
            <Text>location.heading</Text>}
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
  errorMessage: {
    fontSize: 20,
    marginTop: 50,
    textAlign: 'center'
  }
});

export const mapStateToProps = state => ({
  lat: state.location.lat,
  lon: state.location.lon
});

export default connect(mapStateToProps, null)(StarMap);

StarMap.propTypes = {
  lat: PropTypes.string,
  lon: PropTypes.string
};