import React from 'react';
import { ScrollView } from 'react-native';
import Card from '../components/Card.js'; 

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