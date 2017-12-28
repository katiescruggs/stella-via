import React, { Component } from 'react';
import { StyleSheet, AppRegistry, ImageBackground, TextInput, View, Text, Button, Image, TouchableHighlight } from 'react-native';

const Welcome = (props) => {
  handlePress = () => {
    console.log('pressed')
  } 

  return (
    <ImageBackground source={require('../assets/star-background.jpg')} style={styles.container}>
      <Text style={styles.mainTitle}>Stella Via</Text>
      <View style={styles.nav}>

        <TouchableHighlight 
          style={styles.navIcon} 
          onPress={handlePress} 
          activeOpacity={0.3} 
          underlayColor={'#735290'}>
          <View style={styles.iconWrapper}> 
            <Text style={styles.navText}>Search</Text>
            <Image source={require('../assets/search.png')}/>
          </View>
        </TouchableHighlight>

        <TouchableHighlight 
          style={styles.navIcon} 
          onPress={handlePress} 
          activeOpacity={0.3} 
          underlayColor={'#735290'}>
          <View style={styles.iconWrapper}> 
            <Text style={styles.navText}>Tonight's Sky</Text>
            <Image source={require('../assets/planet.png')}/>
          </View>
        </TouchableHighlight>

        <TouchableHighlight 
          style={styles.navIcon} 
          onPress={handlePress} 
          activeOpacity={0.3} 
          underlayColor={'#735290'}>
          <View style={styles.iconWrapper}> 
            <Text style={styles.navText}>Daily Image</Text>
            <Image source={require('../assets/photo.png')}/>
          </View>
        </TouchableHighlight>

        <TouchableHighlight 
          style={styles.navIcon} 
          onPress={handlePress} 
          activeOpacity={0.3} 
          underlayColor={'#735290'}>
          <View style={styles.iconWrapper}> 
            <Text style={styles.navText}>Login</Text>
            <Image source={require('../assets/user.png')}/>
          </View>
        </TouchableHighlight>

      </View>
    </ImageBackground>
  )
}

const styles = {
  container: {
    flex: 1,
    justifyContent: 'space-around',
    alignItems: 'center'
  },
  mainTitle: {
    fontSize: 80,
    color: '#fff',
    marginTop: 70,
    margin: 15,
    textAlign: 'center'
  },
  nav: {
    borderRadius: 50,
    flexDirection: 'row',
    flexWrap: 'wrap',
    borderWidth: 3,
    borderColor: '#fff',
    justifyContent: 'center',
    alignItems: 'center',
    paddingBottom: 25,
    paddingTop: 30,
    margin: 15,
  },
  iconWrapper: {
    justifyContent: 'center',
    alignItems: 'center',
    height: 130, 
    width: 130,
  },
  navIcon: {
    borderRadius: 20,
    backgroundColor: '#282640',
    justifyContent: 'center',
    alignItems: 'center',
    margin: 10,
    shadowColor: 'rgba(0, 0, 0, 0.8)',
    shadowOffset: { width: 2, height: 10 },
    shadowOpacity: 0.8,
    shadowRadius: 2,
    elevation: 1
  },
  navText: {
    textAlign: 'center',
    fontSize: 18,
    color: '#fff',
    fontWeight: 'bold',
    marginBottom: 4
  }
}

export default Welcome;