import React from 'react';
import { StyleSheet, View, Text, TouchableHighlight, Image } from 'react-native';
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
      <View style={styles.cardHeader}>
        <Text style={styles.cardTitle}>
          {`${name} (${translation})`}
        </Text>
        <TouchableHighlight 
          // style={styles.}
          onPress={() => console.log('pressed')} 
          activeOpacity={0.3} 
          underlayColor={colors.$purple}>
          <Image 
            style={styles.icon}
            source={require('../assets/icons/search.png')}/>
        </TouchableHighlight>
      </View>
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
    fontSize: 16,
    fontWeight: 'bold',
    color: colors.$white
  },
  icon: {
    height: 30,
    width: 30
  },
  cardHeader: {
    backgroundColor: 'black',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 5
  }
});

export default Card;