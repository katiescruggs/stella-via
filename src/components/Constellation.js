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
      image,
      visible
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

  const visibleEye = visible 
    ? <Image 
      style={styles.eye}
      source={require('../assets/icons/eye.png')} /> 
    : null;

  return (
    <ImageBackground
      source={require('../assets/star-background.jpg')}
      style={styles.container}>
        <View style={styles.header}>
          {visibleEye}
          <Text style={styles.title}>
            {name.toUpperCase()}
          </Text>
        </View>
        <View style={styles.imageContainer}>
          <TouchableHighlight 
            style={styles.button}
            onPress={handlePress} 
            activeOpacity={0.3} 
            underlayColor={colors.$darkPurple}>
            <Image 
              style={styles.icon}
              source={require('../assets/icons/go-back.png')}/>
          </TouchableHighlight>
          <Image 
            source={image}
            style={styles.constellationImage}
          />
          <Text style={styles.translation}>
            {`"${translation}"`}
          </Text>
        </View>
        <View style={styles.detailsContainer}>
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
    </ImageBackground>
  )
}

const styles = StyleSheet.create({
  container: {
    width: '100%',
    height: '100%',
    alignItems: 'center', 
    justifyContent: 'space-between'
  },
  header: {
    backgroundColor: colors.$purple,
    paddingTop: 50,
    paddingBottom: 10,
    width: '100%'
  },
  eye: {
    position: 'absolute',
    top: 40,
    left: 40, 
    height: 40,
    width: 40,
    zIndex: 10
  },
  title: {
    color: colors.$white,
    fontSize: 22,
    fontWeight: 'bold',
    textAlign: 'center'
  },
  imageContainer: {
    alignItems: 'center',
    justifyContent: 'center',
    width: '100%'
  },
  constellationImage: {
    width: 300,
    height: 300,
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
  translation: {
    backgroundColor: colors.$purple,
    color: colors.$white,
    fontSize: 18,
    fontWeight: 'bold',
    textAlign: 'center',
    paddingTop: 10,
    paddingBottom: 10,
    width: '100%'
  },
  detailsContainer: {
    marginBottom: 120,
  },
  detailText: {
    backgroundColor: 'transparent',
    color: colors.$white,
    padding: 5,
    fontSize: 18,
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