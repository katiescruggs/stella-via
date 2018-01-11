 import React, { Component } from 'react';
import NavBar from './NavBar.js';
import { colors } from '../assets/colors';
import constellations from '../../constellations/constellations';
import CardContainer from './CardContainer';
import { getLastNextMonth, months } from '../helpers/getMonth';
import { assignVisibility } from '../helpers/assignVisibility';
import { 
  StyleSheet, 
  View, 
  ImageBackground, 
  Text, 
  TextInput, 
  TouchableHighlight, 
} from 'react-native';

class Search extends Component {
  constructor(props) {
    super(props);

    this.state = {
      matchConstellations: constellations,
      returnToTop: false,
      currentSeason: null
    };

    this.seasons = {
      winter: 1,
      spring: 4,
      summer: 7, 
      fall: 10
    };
  }

  componentDidMount() {
    const matchConstellations = assignVisibility(constellations);

    this.setState({ matchConstellations });
  }

  handleSearch = (text) => {
    const filteredConstellations = constellations.filter(constellation => {
      return constellation.name.includes(text);
    });

    const matchConstellations = assignVisibility(filteredConstellations);

    this.setState({ matchConstellations, currentSeason: null });
  }

  filterSeason = (season) => {    
    const monthIndex = this.seasons[season];
    const currentMonth = months[monthIndex];
    const { lastMonth, nextMonth } = getLastNextMonth(monthIndex);

    const filteredConstellations = constellations.filter(constellation => {
      const seenMonth = constellation.coords.bestSeen;

      return (
        seenMonth === currentMonth 
        || seenMonth === nextMonth 
        || seenMonth === lastMonth
      );
    });

    const matchConstellations = assignVisibility(filteredConstellations);

    this.setState({ matchConstellations, returnToTop: true, currentSeason: season});
  };

  render () {
    const seasonButtons = Object.keys(this.seasons).map((season, index) => {
      const name = (season.charAt(0)).toUpperCase() + season.slice(1);
      const buttonStyle = season !== this.state.currentSeason ? styles.seasonButton : styles.activeButton;
      const textStyle = season !== this.state.currentSeason ? styles.seasonText : styles.activeText;

      return (
        <TouchableHighlight 
          key={`button-${index}`}
          onPress={() => this.filterSeason(season)}
          style={buttonStyle}>
          <Text style={textStyle}>
            {name}
          </Text>
        </TouchableHighlight>
      );
    });

    const displayConstellations = this.state.matchConstellations 
      ? <CardContainer 
        constellations={this.state.matchConstellations}
        returnToTop={this.state.returnToTop} />
      : null;

    return (
      <ImageBackground 
        source={require('../assets/star-background.jpg')}
        style={styles.container}>
        <View style={styles.header}>
          <Text style={styles.searchTitle}>EXPLORE</Text>
        </View>
        <TextInput
          style = {styles.textInput}
          placeholder='Search for a constellation.'
          onChangeText={(text) => this.handleSearch(text)}
        />
        <View style={styles.seasonContainer}>
          {seasonButtons}
        </View>
        {displayConstellations}
        <NavBar />
      </ImageBackground>
    );
  }
} 

const styles = StyleSheet.create({
  searchTitle: {
    color: colors.$white,
    fontSize: 25,
    paddingTop: 30
  },
  header: {
    backgroundColor: colors.$purple,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center'
  },
  container: {
    width: '100%',
    height: '100%',
    paddingBottom: 65
  },
  textInput: {
    backgroundColor: colors.$white,
    color: colors.$darkPurple,
    fontSize: 20,
    padding: 5,
    width: '100%'
  },
  seasonContainer: {
    backgroundColor: colors.$purple,
    flexDirection: 'row',
    justifyContent: 'space-between',
    padding: 5
  },
  seasonButton: {
    alignSelf: 'flex-end',
    backgroundColor: colors.$lavender,
    borderColor: colors.$lavender,
    borderRadius: 10,
    borderWidth: 2,
    padding: 3,
    width: '23%'
  },
  activeButton: {
    alignSelf: 'flex-end',
    backgroundColor: colors.$black,
    borderColor: colors.$black,
    borderRadius: 10,
    borderWidth: 2,
    padding: 3,
    width: '23%'
  },
  seasonText: {
    fontSize: 18,
    textAlign: 'center'
  },
  activeText: {
    fontSize: 18,
    textAlign: 'center',
    color: colors.$white
  }
});

export default Search;