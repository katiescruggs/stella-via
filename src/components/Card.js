import React, { Component } from 'react';
import { StyleSheet, View, Text, TouchableHighlight, Image } from 'react-native';
import { colors } from '../assets/colors';

class Card extends Component {
  constructor() {
    super();

    this.state = {
      showDetails: false
    };
  };


  handlePress = () => {
    const showDetails = !this.state.showDetails;
    this.setState({ showDetails });
  }

  render() {
    const { 
      description, 
      stars, 
      translation, 
      coords, 
      name, 
      image 
    } = this.props.constellation;

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

    const cardDropDown = this.state.showDetails 
      ? <View>
          <Text>
          {`Location: RA ${coords.ra}, DEC ${coords.dec}`}
          </Text>
          <Text>
            {`Named Stars: ${starsString}`}
          </Text>
          {displayDescription}
        </View>
      : null;

    const source = image ? image : null;

    return (
      <View style={styles.card}>
        <View style={styles.cardHeader}>
          <Text style={styles.cardTitle}>
            {`${name} (${translation})`}
          </Text>
          <Image 
            source={source}
            style={{height: 50, width: 50}}
          />
          <TouchableHighlight 
            onPress={this.handlePress} 
            activeOpacity={0.3} 
            underlayColor={colors.$purple}>
            <Image 
              style={styles.icon}
              source={require('../assets/icons/search.png')}/>
          </TouchableHighlight>
        </View>
        {cardDropDown}
      </View>
    );
  }
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