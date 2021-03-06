import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { changePage } from '../actions';
import { colors } from '../assets/colors';
import { 
  StyleSheet, 
  View, 
  Text, 
  TouchableHighlight, 
  Image 
} from 'react-native';

export const LocationBanner = ({ location, page, changePage }) => {
  const { lat, lon, city, state } = location;

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
            <Text style={styles.locationName}>
              New Location
            </Text>
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
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  coordsBanner: {
    backgroundColor: colors.$black,
    flexDirection: 'row',
    justifyContent: 'space-between',
    padding: 5,
    zIndex: 9000
  },
  coordsText: {
    color: colors.$white,
    fontSize: 16,
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
    alignItems: 'center',
    justifyContent: 'center'
  },
  changeLocationIcon: {
    height: 20,
    marginLeft: 5,
    width: 20
  },
  rightView: {
    justifyContent: 'center',
    marginRight: 5
  },
  leftView: {
    alignItems: 'center',
    justifyContent: 'center',
    marginLeft: 20
  }
});

export const mapStateToProps = state => ({
  location: state.location,
  page: state.page
});

export const mapDispatchToProps = dispatch => ({
  changePage: (pageRoute) => {
    dispatch(changePage(pageRoute));
  }
});

export default connect(mapStateToProps, mapDispatchToProps)(LocationBanner);

LocationBanner.propTypes = {
  page: PropTypes.string,
  location: PropTypes.object,
  changePage: PropTypes.func
};
