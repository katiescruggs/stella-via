import React from 'react';
import { connect } from 'react-redux';
import { colors } from '../assets/colors';
import { changePage } from '../actions';
import NavBar from './NavBar';
import { 
  StyleSheet, 
  View, 
  Text, 
  Image, 
  ImageBackground, 
  TouchableHighlight, 
  ScrollView 
} from 'react-native';

export const Constellation = ({ constellation, currentPage, changePage }) => {
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

  const descriptionString = description 
    ? description 
    : 'None given for this constellation.';

  const handlePress = () => {
    const backPage = currentPage === 'ConstellationSearch' 
      ? 'Search' 
      : 'TonightsSky';

    changePage(backPage);
  };

  const visibleEye = visible 
    ? <Image 
      style={styles.eye}
      source={require('../assets/icons/night-sky.png')} /> 
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
        <Text style={styles.translation}>
          {`"${translation}"`}
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
      </View>
      <ScrollView style={styles.scroll}>
        <View style={styles.detailsContainer}>
          <View style={styles.detailHeader}>          
            <Text style={styles.detailHeaderText}>Location:</Text>
          </View>
          <Text style={styles.detailText}>
            {`RA ${coords.ra}, DEC ${coords.dec}`}
          </Text>
          <View style={styles.detailHeader}>          
            <Text style={styles.detailHeaderText}>Named Stars:</Text>
          </View>
          <Text style={styles.detailText}>
            {`${starsString}`}
          </Text>
          <View style={styles.detailHeader}>          
            <Text style={styles.detailHeaderText}>Description:</Text>
          </View>
          <Text style={styles.detailText}>
            {`${descriptionString}`}
          </Text>
        </View>
      </ScrollView>
      <NavBar />
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  container: {
    width: '100%',
    height: '100%',
    alignItems: 'center', 
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
    padding: 5,
    zIndex: 10
  },
  icon: {
    height: 40,
    width: 40
  },
  scroll: {
    width: '100%'
  },
  detailsContainer: {
    marginBottom: 120,
    height: '100%',
    backgroundColor: colors.$transparentPurple
  },
  detailHeader: {
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: colors.$purple,
    width: '100%'
  },
  detailHeaderText: {
    backgroundColor: colors.$transparentDarkPurple,
    color: colors.$white,
    padding: 5,
    fontSize: 16,
    fontWeight: 'bold',
    margin: 5,
    width: '100%'
  },
  detailText: {
    backgroundColor: colors.$transparent,
    color: colors.$white,
    padding: 5,
    fontSize: 16,
    margin: 5
  }
});

export const mapStateToProps = state => ({
  constellation: state.constellation,
  currentPage: state.page
});

export const mapDispatchToProps = dispatch => ({
  changePage: (pageRoute) => {
    dispatch(changePage(pageRoute));
  }
});

export default connect(mapStateToProps, mapDispatchToProps)(Constellation);