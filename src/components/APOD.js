import React, { Component } from 'react';
import { AppRegistry, StyleSheet, View, Text, Image, Button } from 'react-native';
import getAPOD from '../helpers/getAPOD.js';

class APOD extends Component {
  constructor(props) {
    super(props);
    this.state = {
      image: {},
      title: '',
      details: '',
      showDetails: false

    };
  }

  fetchAPOD = async () => {
    const apodData = await getAPOD();
    const image = !apodData 
      ? { uri: 'https://www.rugbywarfare.com/store/wp-content/uploads/2017/04/random-image-005.jpg' }
      : { uri: apodData.url };

    const title = apodData.title;
    const details = apodData.explanation;
    this.setState({ image, title, details });
  }

  async componentDidMount() {
    await this.fetchAPOD()
  }

  handleShowDetails = () => {
    const showDetails = !this.state.showDetails
    this.setState({ showDetails });
  }

  render() {
    let source;
    if (this.state.image.uri) {
      source = this.state.image
    }
    const imageDetails = this.state.showDetails 
      ? <Text style={styles.details}>{this.state.details}</Text> 
      : null;

    return (
      <View style={styles.container}>
        <View style={styles.imageView}>
          <Text style={styles.teleText}>NASA Image of the Day</Text>
          <Text style={styles.teleText}>{this.state.title}</Text>
          <Image
            style={styles.img} 
            source={source}
          />
          <Button 
            style={styles.teleText} 
            title='Click for image details'
            onPress={this.handleShowDetails}>
          </Button>
        </View>
        {imageDetails}
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#502F4C',
    alignItems: 'center',
    justifyContent: 'center',
  },
  img: {
    width: 300, 
    height: 300,
    borderRadius: 150,
    shadowColor: '#000',
    shadowRadius: 600,
    shadowOpacity: 1
  },
  imageView : {
    width: 400,
    backgroundColor: '#000',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 15,
  },
  teleText: {
    color: '#fff',
    fontSize: 16,
  },
  details: {
    position: 'absolute',
    padding: 5,
    color: '#fff',
    fontSize: 14,
    // display: none
  }
});

export default APOD;