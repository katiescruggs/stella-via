import React from 'react';
import { connect } from 'react-redux';
import { View, Text } from 'react-native';
import Card from '../components/Card.js'; 

import constellations from '../../constellations/constellations.js';

const CardContainer = ({RA, dec}) => {
  const rangeRA = [RA - 25, RA + 25];
  const rangeDec = [dec - 25, dec + 25];

  const matchConstellations = constellations.filter(constellation => {
    const matchRA = constellation.coords.ra > rangeRA[0] && constellation.coords.ra < rangeRA[1]
    const matchDec = constellation.coords.dec > rangeDec[0] && constellation.coords.dec < rangeDec[1]

    return matchRA && matchDec;
  });

  console.log(matchConstellations.length)

  const cards = matchConstellations.map((constellation, index) => (
    <Card
      key={`card-${index}`} 
      constellation={constellation}/>
  ));

  return (
    <View style={styles.cardContainer}>
      {cards}
    </View>
  );
}

const styles = {
  cardContainer: {
    paddingBottom: 100,
    width: '100%'
  }
}

const mapStateToProps = state => ({
  RA: state.skyCoords.decimalRA,
  dec: state.skyCoords.dec
});

export default connect(mapStateToProps, null)(CardContainer);