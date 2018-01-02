import React from 'react';
import { StyleSheet, View, Text } from 'react-native';
import { colors } from '../assets/colors';

const Card = ({ constellation }) => {
  const { description, stars, translation, coords, name } = constellation;
  const descriptionText = description 
    ? description.substring(0, 140) 
    : null;

  const displayDescription = descriptionText 
    ? <Text>
        {`Description: ${descriptionText}...`}
      </Text>
    : null;

  const starsString = stars.length 
    ? stars.join(', ')
    : 'none';

  return (
    <View style={styles.card}>
      <Text style={styles.cardTitle}>
        {`${name} (${translation})`}
      </Text>
      <Text>
        {`Location: RA ${coords.ra}, DEC ${coords.dec}`}
      </Text>
      <Text>
        {`Named Stars: ${starsString}`}
      </Text>
      {displayDescription}
    </View>
  );
};

const styles = StyleSheet.create({
  card: {
    backgroundColor: colors.$white,
    borderColor: colors.$black,
    borderWidth: 1,
    marginBottom: 10,
    padding: 10,
    width: '100%'
  },
  cardTitle: {
    fontSize: 18
  }
});

export default Card;