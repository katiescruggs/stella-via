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
  TouchableHighlight 
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
      <View style={styles.imageView}>
        <View style={styles.textView}>
          <Text style={styles.teleText}>Astronomy Picture of the Day</Text>
          <Text style={styles.teleText}>{title}</Text>
        </View>
        {apod}
      </View>
      <ScrollView style={styles.detailView}>
        <Text style={styles.detailsHeader}>Today's Image:</Text>
        <Text style={styles.details}>{details}</Text>
      </ScrollView>
      <NavBar />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.$black,
    alignItems: 'center',
    justifyContent: 'space-around',
    width: '100%'
  },
  topBorder: {
    width: '100%',
    height: 50,
    backgroundColor: colors.$purple
  },
  img: {
    borderRadius: 150,
    borderWidth: 1,
    shadowColor: colors.$black,
    shadowRadius: 600,
    shadowOpacity: 1,
    padding: 10,
    height: 300,
    width: 300, 
  },
  vid: {
    height: 300,
    width: 300,
    margin: 10
  },
  imageView : {
    backgroundColor: colors.$black,
    borderColor: colors.$white,
    borderWidth: 1,
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 20,
    marginBottom: 20,
    height: 350,
    width: '93%',
  },
  textView: {
    alignItems: 'center',
    justifyContent: 'space-between',
    height: 355,
    position: 'absolute',
    zIndex: 10,
  },
  upperText: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '90%',
  },
  teleText: {
    color: colors.$white,
    fontSize: 16,
  },
  detailView: {
    flex: 1,
    backgroundColor: colors.$transparentDarkPurple,
    borderColor: colors.$white,
    borderWidth: 1,
    borderBottomWidth: 0,
    width: '93%',
  },
  detailsHeader: {
    backgroundColor: colors.$purple,
    color: colors.$white,
    fontSize: 28,
    textAlign: 'center',
    padding: 10,
    width: '100%',
  },
  details: {
    color: colors.$white,
    fontSize: 18,
    lineHeight: 25,
    textAlign: 'center',
    marginBottom: 105,
    padding: 20,
  }
});

const mapStateToProps = state => ({
  apodData: state.apodData
});

export default connect(mapStateToProps, null)(APOD);

