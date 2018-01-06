import React from 'react';
import { StyleSheet, View, Text, Image, ImageBackground } from 'react-native';
import { colors } from '../assets/colors';

const Constellation = (props) => {
  return (
    <ImageBackground
      source={require('../assets/star-background.jpg')}
      style={styles.container}>
      <View style={styles.contentContainer}>
        <View style={styles.header}>
          <Text style={styles.title}>
            ORION
          </Text>
          <Text style={styles.translation}>
            "The Great Hunter"
          </Text>
        </View>
      </View>
      <Image 
        source={require('../assets/constellations-images/Orion.png')}
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
  }
})

export default Constellation;