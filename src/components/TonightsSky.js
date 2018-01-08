import React from 'react';
import CardContainer from './CardContainer';
import NavBar from './NavBar';
import { colors } from '../assets/colors';
import constellations from '../../constellations/constellations';
import { getMonth } from '../helpers/getMonth';
import { assignVisibility } from '../helpers/assignVisibility';
import LocationBanner from './LocationBanner';
import { 
  StyleSheet, 
  View, 
  Text, 
  ImageBackground, 
  ScrollView
} from 'react-native';

const TonightsSky = () => {
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
      <View>
        <View style={styles.titleContainer}>
          <Text style={styles.skyTitle}>TONIGHT'S SKY</Text>
        </View>
        <LocationBanner />
        <ScrollView style={styles.ScrollView}>
          <Text style={styles.constellationsSubheader}>
            Easiest To View This Month
          </Text>
          <CardContainer 
            constellations={assignVisibility(matchConstellations)} />
          <Text style={styles.constellationsSubheader}>
            More Constellations
          </Text>
          <CardContainer 
            constellations={assignVisibility(nearConstellations)} />
        </ScrollView>
      </View>
      <NavBar />
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  constellationsContainer: {
    width: '100%',
    height: '100%',
    paddingBottom: 60
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
    fontSize: 30,
    textAlign: 'center',
    paddingTop: 30
  },
  constellationsSubheader: {
    color: colors.$Darkpurple,
    backgroundColor: colors.$purple,
    fontSize: 16,
    fontWeight: 'bold',
    padding: 5,
    textAlign: 'center'
  },
  ScrollView: {
    marginBottom: 210
  }
});

export default TonightsSky;

