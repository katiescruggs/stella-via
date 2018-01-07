import React, { Component } from 'react';
import getAPOD from '../helpers/getAPOD';
import NavBar from '../containers/NavBar';
import { colors } from '../assets/colors';
import { connect } from 'react-redux';
import { 
  AppRegistry, 
  StyleSheet, 
  View, 
  Text, 
  Image, 
  WebView,
  TouchableHighlight,
  ImageBackground 
} from 'react-native';

class APOD extends Component {
  constructor(props) {
    super(props);

    this.state = {
      displayDetails: false
    };
  };

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

    const apod = type === 'image' 
      ? <Image
          style={styles.img} 
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
          <Text style={styles.details}>{details}</Text>
        </ImageBackground>;

    return (
      <View style={styles.container}>
        <View style={styles.topBorder}></View>
        <ImageBackground 
          source={require('../assets/star-background.jpg')}
          style={styles.imageBackground}>
          <TouchableHighlight 
            onPress={this.handlePress}
            style={styles.button}>
            <Text style={styles.buttonText}>
              Image Details
            </Text>
          </TouchableHighlight>
          <Text style={styles.frameText}>
            Astronomy Picture of the Day
          </Text>
          <View style={styles.imageView}>
            {apod}
          </View>
          <Text style={styles.frameText}>
            {title}
          </Text>
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
    paddingTop: 20,
    marginBottom: 100,
    width: '100%',
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
    backgroundColor: 'transparent',
    color: colors.$white,
    fontSize: 16,
    padding: 5,
    textAlign: 'center'
  },
  button: {
    backgroundColor: colors.$purple,
    padding: 10,
    borderRadius: 10,
    marginBottom: 20,
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
    top: 160,
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

const mapStateToProps = state => ({
  apodData: state.apodData
});

export default connect(mapStateToProps, null)(APOD);

