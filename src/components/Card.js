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
        </View>
        <TouchableHighlight 
          style={styles.button}
          onPress={this.handlePress} 
          activeOpacity={0.3} 
          underlayColor={colors.$purple}>
          <Image 
            style={styles.icon}
            source={require('../assets/icons/search.png')}/>
        </TouchableHighlight>
        <Image 
          source={source}
          style={{height: 200, width: 200}}
        />
        {cardDropDown}
      </View>
    );
  }
};

const styles = StyleSheet.create({
  card: {
    alignItems: 'center',
    backgroundColor: colors.$transparentDarkPurple,
    borderColor: colors.$purple,
    borderWidth: 4,
    marginBottom: 10,
    // padding: 10,
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
  button: {
    position: 'absolute', 
    right: 15, 
    bottom: 15,
    backgroundColor: colors.$purple,
    borderRadius: 10,
    padding: 5
  },
  cardHeader: {
    backgroundColor: colors.$purple,
    width: '100%',
    // flexDirection: 'row',
    // justifyContent: 'space-between',
    alignItems: 'center',
    padding: 5
  }
});

export default Card;