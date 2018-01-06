import React from 'react';
import { connect } from 'react-redux'
import { StyleSheet, View, Text, Image, ImageBackground, TouchableHighlight } from 'react-native';
import { colors } from '../assets/colors';
import { changePage } from '../actions';
import NavBar from '../containers/NavBar';

const Constellation = ({ constellation, currentPage, changePage }) => {
  const { 
      description, 
      stars, 
      translation, 
      coords, 
      name, 
      image 
    } = constellation;

  const starsString = stars.length 
    ? stars.join(', ')
    : 'none';


  const handlePress = () => {
    const backPage = currentPage === 'ConstellationSearch' 
      ? 'Search' 
      : 'TonightsSky';

    changePage(backPage);
  };

  return (
    <ImageBackground
      source={require('../assets/star-background.jpg')}
      style={styles.container}>
      <View style={styles.contentContainer}>
        <View style={styles.header}>
          <Text style={styles.title}>
            {name.toUpperCase()}
          </Text>
          <Text style={styles.translation}>
            {`"${translation}"`}
          </Text>
        </View>
        <View style={styles.detailsContainer}>
          <TouchableHighlight 
            style={styles.button}
            onPress={handlePress} 
            activeOpacity={0.3} 
            underlayColor={colors.$darkPurple}>
            <Image 
              style={styles.icon}
              source={require('../assets/icons/star.png')}/>
          </TouchableHighlight>
          <Text style={styles.detailText}>
          {`Location: RA ${coords.ra}, DEC ${coords.dec}`}
          </Text>
          <View style={styles.stars}> 
            <Text style={styles.detailText}>
              {`Named Stars: ${starsString}`}
            </Text>
          </View>
          <Text style={styles.detailText}>
            {`Description: ${description}`}
          </Text>
        </View>
        <NavBar />
      </View>
      <Image 
        source={image}
        style={styles.constellationImage}
      />
    </ImageBackground>
  )
}

const styles = StyleSheet.create({
  container: {
    width: '100%',
    height: '100%',
    alignItems: 'center', 
    justifyContent: 'center'
  },
  constellationImage: {
    width: 350,
    height: 350,
  },
  contentContainer: {
    backgroundColor: colors.$fullCardShadow,
    position: 'absolute',
    width: '100%',
    height: '100%',
    alignItems: 'center', 
    justifyContent: 'space-between',
    zIndex: 10
  },
  header: {
    backgroundColor: colors.$purple,
    paddingTop: 50,
    paddingBottom: 10,
    width: '100%'
  },
  title: {
    color: colors.$white,
    fontSize: 22,
    fontWeight: 'bold',
    textAlign: 'center'
  },
  translation: {
    color: colors.$white,
    fontSize: 18,
    fontWeight: 'bold',
    textAlign: 'center'
  },
  detailsContainer: {
    marginBottom: 200,
    height: '75%',
    justifyContent: 'space-around'
  },
  button: {
    position: 'absolute', 
    right: 15, 
    top: 15,
    backgroundColor: colors.$purple,
    borderRadius: 10,
    padding: 5
  },
  icon: {
    height: 40,
    width: 40
  },
  detailText: {
    color: colors.$white,
    padding: 5,
    fontSize: 18,
    margin: 10
  }
});

const mapStateToProps = state => ({
  constellation: state.constellation,
  currentPage: state.page
});

const mapDispatchToProps = dispatch => ({
  changePage: (pageRoute) => {
    dispatch(changePage(pageRoute));
  }
})

export default connect(mapStateToProps, mapDispatchToProps)(Constellation);