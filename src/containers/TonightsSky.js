import React from 'react';
import { connect } from 'react-redux';
import CardContainer from './CardContainer';
import NavBar from './NavBar';
import NavButton from '../components/NavButton';
import { colors } from '../assets/colors';
import constellations from '../../constellations/constellations';
import { getMonth } from '../helpers/getMonth';
import { assignVisibility } from '../helpers/assignVisibility';
import { 
  StyleSheet, 
  ScrollView, 
  View, 
  Text, 
  ImageBackground 
} from 'react-native';

export const TonightsSky = ({ lat, lon }) => {
  const { currentMonth, lastMonth, nextMonth } = getMonth();

  const matchConstellations = constellations.filter(constellation => 
    constellation.coords.bestSeen === currentMonth
  );

  const nearConstellations = constellations.filter(constellation => {
    const seenMonth = constellation.coords.bestSeen;

    return (seenMonth === lastMonth || seenMonth === nextMonth);
  });

  return (
    <ImageBackground
      source={require('../assets/star-background.jpg')}
      style={styles.constellationsContainer}>
      <ScrollView>
        <View style={styles.titleContainer}>
          <Text style={styles.skyTitle}>TONIGHT'S SKY</Text>
          <NavButton 
            path={require('../assets/icons/location.png')}
            name={null}
            pageRoute='LocationModalTonight'
            small={true}
          />
        </View>
        <Text style={styles.constellationsTitle}>
          {`Constellations For ${lat}\xb0, ${lon}\xb0`}
        </Text>
        <Text style={styles.constellationsSubheader}>Best Constellations to See This Month:</Text>
        <CardContainer 
          constellations={assignVisibility(matchConstellations)} />
        <Text style={styles.constellationsSubheader}>More Constellations:</Text>
        <CardContainer 
          constellations={assignVisibility(nearConstellations)} />
      </ScrollView>
      <NavBar />
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  constellationsContainer: {
    // backgroundColor: colors.$darkPurple,
    width: '100%',
    height: '100%',
    paddingBottom: 100
  },
  titleContainer: {
    backgroundColor: colors.$purple,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 10
  },
  skyTitle: {
    color: colors.$white,
    fontSize: 35,
    textAlign: 'center',
    paddingTop: 30
  },
  constellationsTitle: {
    color: colors.$white,
    fontSize: 20,
    // marginBottom: 10
  },
  constellationsSubheader: {
    color: colors.$white,
    backgroundColor: colors.$purple,
    fontSize: 16,
    fontWeight: 'bold',
    padding: 10
  }
});

export const mapStateToProps = state => ({
  lat: state.location.lat,
  lon: state.location.lon
});

export default connect(mapStateToProps, null)(TonightsSky);

