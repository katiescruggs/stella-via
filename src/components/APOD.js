import React, { Component } from 'react';
import NavBar from '../components/NavBar';
import { colors } from '../assets/colors';
import { connect } from 'react-redux';
import { 
  StyleSheet, 
  View, 
  Text, 
  Image, 
  WebView,
  ScrollView,
  TouchableHighlight,
  ImageBackground 
} from 'react-native';

export class APOD extends Component {
  constructor(props) {
    super(props);

    this.state = {
      displayDetails: false
    };
  }

  handlePress = () => {
    const displayDetails = !this.state.displayDetails;

    this.setState({ displayDetails });
  };

  render() {
    const { 
      image, 
      type, 
      title, 
      details 
    } = this.props.apodData;

    const imageStyle = title === 'Image Did Not Load'
      ? styles.imgError
      : styles.img;

    const apod = type === 'image' 
      ? <Image
        style={imageStyle} 
        source={image} />
      : <WebView 
        style={styles.vid} 
        scalesPageToFit={false}
        source={image} />;

    const detailsDisplay = !this.state.displayDetails 
      ? null
      : <ImageBackground 
        source={require('../assets/star-background.jpg')}
        style={styles.detailView}>
        <Text style={styles.frameText}>{title.toUpperCase()}:</Text>
        <ScrollView>
          <Text style={styles.details}>{details}</Text>
        </ScrollView>
      </ImageBackground>;

    return (
      <View style={styles.container}>
        <View style={styles.topBorder}></View>
        <ImageBackground 
          source={require('../assets/star-background.jpg')}
          style={styles.imageBackground}>
          <View style={styles.imageContainer}>
            <Text style={styles.frameText}>
              Astronomy Picture of the Day
            </Text>
            <View style={styles.imageView}>
              {apod}
            </View>
            <Text style={styles.frameText}>
              {title}
            </Text>
            <TouchableHighlight 
              onPress={this.handlePress}
              style={styles.button}>
              <Text style={styles.buttonText}>
                Image Details
              </Text>
            </TouchableHighlight>
          </View>
        </ImageBackground>
        {detailsDisplay} 
        <NavBar />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.$black,
    alignItems: 'center',
    justifyContent: 'center',
    width: '100%'
  },
  topBorder: {
    width: '100%',
    height: 50,
    backgroundColor: colors.$purple
  },
  imageBackground: {
    flex: 1,
    alignItems: 'center', 
    justifyContent: 'space-between',
    marginBottom: 100,
    width: '100%'
  },
  imageContainer: {
    borderTopWidth: 1,
    borderBottomWidth: 1,
    borderColor: colors.$white,
    height: 465
  },
  imgError: {
    height: 340,
    width: 340, 
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
  imageView: {
    backgroundColor: colors.$black,
    borderColor: colors.$white,
    borderTopWidth: 1,
    borderBottomWidth: 1,
    alignItems: 'center',
    justifyContent: 'center',
    height: 400,
    width: 400
  },
  frameText: {
    backgroundColor: colors.$transparent,
    color: colors.$white,
    fontSize: 18,
    padding: 5,
    textAlign: 'center'
  },
  button: {
    backgroundColor: colors.$purple,
    padding: 10,
    borderRadius: 10,
    alignSelf: 'center',
    marginTop: 120,
    width: '50%'
  },
  buttonText: {
    color: colors.$white,
    fontSize: 18,
    textAlign: 'center'
  },
  detailView: {
    borderColor: colors.$white,
    borderTopWidth: 1,
    borderBottomWidth: 1,
    position: 'absolute',
    top: 80,
    width: '100%'
  },
  details: {
    backgroundColor: colors.$transparentDarkPurple,
    color: colors.$white,
    fontSize: 18,
    lineHeight: 25,
    padding: 10
  }
});

export const mapStateToProps = state => ({
  apodData: state.apodData
});

export default connect(mapStateToProps, null)(APOD);

