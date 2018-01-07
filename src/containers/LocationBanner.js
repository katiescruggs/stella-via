import React from 'react';
import { connect } from 'react-redux';
import { changePage } from '../actions';
import { StyleSheet, WebView, View, Text, TouchableHighlight, Image } from 'react-native';
import { colors } from '../assets/colors';

export const LocationBanner = ({ location, dec, RA, page, changePage }) => {
  const { lat, lon, city, state } = location;
  const arrayRA = RA.split(' ');
  const formattedRA = `${arrayRA[0]}h, ${arrayRA[1]}m, ${arrayRA[2]}s`;

  const changeLocationClick = () => {
    const nextPage = page === 'StarMap' 
      ? 'LocationModalMap' 
      : 'LocationModalTonight';

    changePage(nextPage);
  };

  return (
    <View style={styles.coordsBanner}>
        <View style={styles.leftView}>
          <Text style={styles.locationName}>
            {`${city}, ${state}`}
          </Text>
          <TouchableHighlight 
            style={styles.changeLocationButton}
            onPress={changeLocationClick}>
            <View style={styles.changeLocationButtonHolder}>
              <Text style={styles.locationName}>Change Location</Text>
              <Image
                style={styles.changeLocationIcon} 
                source={require('../assets/icons/location.png')} />
            </View>
          </TouchableHighlight>
        </View>

        <View style={styles.rightView}>
          <Text style={styles.coordsText}>
            {`Lat: ${lat}\xb0`}
          </Text>
          <Text style={styles.coordsText}>
            {`Lon: ${lon}\xb0`}
          </Text>
          <Text style={styles.coordsText}>
            {`Dec: ${dec}\xb0`}
          </Text>
          <Text style={styles.coordsText}>
            {`RA: ${formattedRA}`}
          </Text>
        </View>
      </View>
  );
}

const styles = StyleSheet.create({
  coordsBanner: {
    backgroundColor: colors.$transparentDarkPurple,
    flexDirection: 'row',
    justifyContent: 'space-between',
    padding: 5
  },
  coordsText: {
    color: colors.$white,
    fontSize: 14,
  },
  locationName: {
    color: colors.$white,
    fontSize: 20
  },
  changeLocationButton: {
    backgroundColor: colors.$purple,
    borderRadius: 10,
    padding: 5
  },
  changeLocationButtonHolder: {
    flexDirection: 'row',
    alignItems: 'flex-end'
  },
  changeLocationIcon: {
    height: 20,
    marginLeft: 5,
    width: 20
  },
  leftView: {
    justifyContent: 'space-between'
  }
});

export const mapStateToProps = state => ({
  location: state.location,
  dec: state.skyCoords.dec,
  RA: state.skyCoords.stringRA,
  page: state.page
});

export const mapDispatchToProps = dispatch => ({
  changePage: (pageRoute) => {
    dispatch(changePage(pageRoute));
  }
});

export default connect(mapStateToProps, mapDispatchToProps)(LocationBanner);

