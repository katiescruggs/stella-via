import React from 'react';
import { connect } from 'react-redux';
import { View, Text } from 'react-native';
import Card from '../components/Card.js'; 

import constellations from '../../constellations/constellations.js';

const CardContainer = (props) => {
  const cards = constellations.map(constellation => (
    <Card constellation={constellation}/>
  ));

  return (
    <View style={styles.cardContainer}>
      {cards}
    </View>
  );
}

const styles = {
  cardContainer: {
    width: '100%'
  }
}

export default CardContainer;