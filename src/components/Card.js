import React from 'react';
import { View, Text } from 'react-native';

const Card = ({constellation}) => {
  const description = constellation.description ? constellation.description.substring(0, 140) : null;

  return (
    <View style={styles.card}>
      <Text style={styles.cardTitle}>{`${constellation.name} (${constellation.translation})`}</Text>
      <Text>{`Location: RA ${constellation.coords.ra}, DEC ${constellation.coords.dec}`}</Text>
      <Text>{`Stars: ${constellation.stars.join(', ')}`}</Text>
      <Text>{`Description: ${description}...`}</Text>
    </View>
  )
};

const styles = {
  card: {
    backgroundColor: 'white',
    borderColor: 'black',
    borderWidth: 1,
    marginBottom: 10,
    padding: 10,
    width: '100%'
  },
  cardTitle: {
    fontSize: 18
  }
}

export default Card;