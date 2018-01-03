import React from 'react';
import { connect } from 'react-redux';
import { View } from 'react-native';
import Card from '../components/Card.js'; 

const CardContainer = ({RA, dec, constellations}) => {
  const cards = constellations.map((constellation, index) => (
    <Card
      key={`card-${index}`} 
      constellation={constellation}
    />
  ));

  return (
    <View style={styles.cardContainer}>
      {cards}
    </View>
  );
};

const styles = {
  cardContainer: {
    paddingBottom: 100,
    width: '100%'
  }
};

const mapStateToProps = state => ({
  RA: state.skyCoords.decimalRA,
  dec: state.skyCoords.dec
});

export default connect(mapStateToProps, null)(CardContainer);