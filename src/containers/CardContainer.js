import React from 'react';
import { connect } from 'react-redux';
import { ScrollView } from 'react-native';
import Card from '../components/Card.js'; 

const CardContainer = ({constellations}) => {
  const cards = constellations.map((constellation, index) => (
    <Card
      key={`card-${index}`} 
      constellation={constellation}
    />
  ));

  return (
      <ScrollView style={styles.cardContainer}>
        {cards}
      </ScrollView>
  );
};

const styles = {
  cardContainer: {
    width: '100%'
  }
};

export default CardContainer;