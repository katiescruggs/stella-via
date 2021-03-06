import React from 'react';
import PropTypes from 'prop-types';
import { ScrollView } from 'react-native';
import Card from './Card.js'; 

const CardContainer = ({constellations, visible, returnToTop}) => {
  const cards = constellations.map((constellation, index) => (
    <Card
      key={`card-${index}`} 
      visible={visible}
      constellation={constellation}
    />
  ));

  if (returnToTop) {
    this.scrollView.scrollTo({x: 0, y: 0, animated: true});
  }

  return (
    <ScrollView 
      ref={ref => this.scrollView = ref}
      style={styles.cardContainer}>
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

CardContainer.propTypes = {
  returnToTop: PropTypes.bool,
  visible: PropTypes.bool,
  constellations: PropTypes.array
};