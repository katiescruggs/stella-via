import React, { Component } from 'react';
import getAPOD from '../helpers/getAPOD';
import NavBar from '../containers/NavBar';
import { colors } from '../assets/colors';
import { connect } from 'react-redux';
import { 
  AppRegistry, 
  StyleSheet, 
  View, 
  ScrollView, 
  Text, 
  Image, 
  WebView, 
  TouchableHighlight,
  ImageBackground 
} from 'react-native';

const APOD = ({ apodData }) => {
  const { image, type, title, details } = apodData;
  const apod = type === 'image' 
    ? <Image
        style={styles.img} 
        source={image} />
    : <WebView 
        style={styles.vid} 
        scalesPageToFit={false}
        source={image} />

  return (
    <View style={styles.container}>
      <View style={styles.topBorder}></View>
      <Text style={styles.frameText}>
        Astronomy Picture of the Day
      </Text>
      <View style={styles.imageView}>
        {apod}
      </View>
      <Text style={styles.frameText}>
        {title}
      </Text>
      <ImageBackground 
        source={require('../assets/star-background.jpg')}
        style={styles.buttonView}>
        <TouchableHighlight style={styles.button}>
          <Text style={styles.buttonText}>
            Image Details
          </Text>
        </TouchableHighlight>
      </ImageBackground>
      {/*<ScrollView style={styles.detailView}>
              <Text style={styles.detailsHeader}>Today's Image:</Text>
              <Text style={styles.details}>{details}</Text>
            </ScrollView>*/}
      <NavBar />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.$black,
    alignItems: 'center',
    // justifyContent: 'space-around',
    width: '100%'
  },
  topBorder: {
    width: '100%',
    height: 50,
    backgroundColor: colors.$purple,
    borderColor: colors.$white,
    borderBottomWidth: 1,
  },
  img: {
    height: '100%',
    width: '100%', 
  },
  vid: {
    height: 300,
    width: 300,
    margin: 10
  },
  imageView : {
    backgroundColor: colors.$black,
    borderColor: colors.$white,
    borderTopWidth: 1,
    borderBottomWidth: 1,
    alignItems: 'center',
    justifyContent: 'center',
    height: 400,
    width: '100%',
  },
  frameText: {
    color: colors.$white,
    fontSize: 16,
    padding: 5,
  },
  buttonView: {
    flex: 1,
    alignItems: 'center', 
    justifyContent: 'center',
    backgroundColor: colors.$transparentDarkPurple,
    borderColor: colors.$white,
    borderTopWidth: 1,
    borderBottomWidth: 0,
    marginBottom: 100,
    width: '100%',
  },
  button: {
    backgroundColor: colors.$purple,
    padding: 10,
    borderRadius: 10,
    width: '50%'
  },
  buttonText: {
    color: colors.$white,
    fontSize: 18,
    textAlign: 'center'
  },
  // details: {
  //   color: colors.$white,
  //   fontSize: 18,
  //   lineHeight: 25,
  //   textAlign: 'center',
  //   marginBottom: 105,
  //   padding: 20,
  // }
});

const mapStateToProps = state => ({
  apodData: state.apodData
});

export default connect(mapStateToProps, null)(APOD);

