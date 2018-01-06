import React, { Component } from 'react';
import { StyleSheet, View, Text, TouchableHighlight, Image } from 'react-native';
import { colors } from '../assets/colors';
import { connect } from 'react-redux';
import { changePage } from '../actions';

class Card extends Component {
  constructor(props) {
    super(props);

    this.state = {
      showDetails: false
    };
  };


  handlePress = () => {
    // const showDetails = !this.state.showDetails;
    // this.setState({ showDetails });
    changePage('Constellation');
  }

  render() {
    const { 
      // description, 
      // stars, 
      translation, 
      // coords, 
      name, 
      image 
    } = this.props.constellation;

    //THIS WILL ALL GET DISPLAYED IN CARD FULL VIEW PAGE

    // const descriptionText = description 
    //   ? description.substring(0, 140) 
    //   : null;

    // const displayDescription = descriptionText 
    //   ? <Text>
    //       {`Description: ${descriptionText}...`}
    //     </Text>
    //   : null;

    // const starsString = stars.length 
    //   ? stars.join(', ')
    //   : 'none';

    // const cardDropDown = this.state.showDetails 
    //   ? <View>
    //       <Text>
    //       {`Location: RA ${coords.ra}, DEC ${coords.dec}`}
    //       </Text>
    //       <Text>
    //         {`Named Stars: ${starsString}`}
    //       </Text>
    //       {displayDescription}
    //     </View>
    //   : null;

    const source = image ? image : null;

    return (
      <View style={styles.card}>
        <View style={styles.cardHeader}>
          <Text style={styles.cardTitle}>
            {name}
          </Text>
          <Text style={styles.translation}>
            {`"${translation}"`}
          </Text>
        </View>
        <TouchableHighlight 
          style={styles.button}
          onPress={this.handlePress} 
          activeOpacity={0.3} 
          underlayColor={colors.$darkPurple}>
          <Image 
            style={styles.icon}
            source={require('../assets/icons/star.png')}/>
        </TouchableHighlight>
        <Image 
          source={source}
          style={{height: 200, width: 200}}
        />
        {/*cardDropDown*/}
      </View>
    );
  }
};

const styles = StyleSheet.create({
  card: {
    alignItems: 'center',
    backgroundColor: colors.$cardShadow,
    borderColor: colors.$purple,
    // borderRightWidth: 0, 
    // borderLeftWidth: 0,
    borderBottomWidth: 6,
    // marginBottom: 20,
    paddingBottom: 10,
    // paddingTop: 10,
    width: '100%'
  },
  cardHeader: {
    backgroundColor: colors.$darkPurple,
    width: '100%',
    alignItems: 'center',
    padding: 5,
    marginBottom: 5
  },
  cardTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    color: colors.$white
  },
  translation: {
    fontSize: 16,
    color: colors.$white
  },
  button: {
    position: 'absolute', 
    right: 15, 
    bottom: 15,
    backgroundColor: colors.$purple,
    borderRadius: 10,
    padding: 5
  },
  icon: {
    height: 30,
    width: 30
  },
});

const mapDispatchToProps = dispatch => ({
  changePage: (pageRoute) => {
    dispatch(changePage(pageRoute));
  }
});

export default connect(null, mapDispatchToProps)(Card);