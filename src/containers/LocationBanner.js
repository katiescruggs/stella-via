import React from 'react';
import { connect } from 'react-redux';
import { StyleSheet, WebView, View, Text, TouchableHighlight, Image } from 'react-native';
import { colors } from '../assets/colors';

export const LocationBanner = ({ lat, lon, dec, RA, page, changePage }) => {
  const arrayRA = RA.split(' ');
  const formattedRA = `${arrayRA[0]}h, ${arrayRA[1]}m, ${arrayRA[2]}s`;

  console.log(changePage);

  const changeLocationClick = () => {
    changePage('Welcome');
  }

  return (
    <View style={styles.coordsBanner}>
        <View style={styles.leftView}>
          <Text style={styles.locationName}>
            Oklahoma City, OK
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
  lat: state.location.lat,
  lon: state.location.lon,
  dec: state.skyCoords.dec,
  RA: state.skyCoords.stringRA,
  page: state.page
});

export const mapDispatchToProps = dispatch => ({
  changePage: (page) => {
    dispatch(changePage(page));
  }
});

export default connect(mapStateToProps, mapDispatchToProps)(LocationBanner);

