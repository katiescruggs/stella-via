import React, { Component } from 'react';
import { AppRegistry, StyleSheet, View, ScrollView, Text, Image, Button } from 'react-native';
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
    // backgroundColor: '#502F4C',
      ? <ScrollView style={styles.detailView}><Text style={styles.details}>{this.state.details}</Text></ScrollView> 
      : null;

    return (
      <View style={styles.container}>
        <View style={styles.imageView}>
          <View style={styles.textView}>
            <Text style={styles.teleText}>NASA Image of the Day</Text>
            <Text style={styles.teleText}>{this.state.title}</Text>
          </View>
          <Image
            style={styles.img} 
            source={source}
          />
        </View>
        {imageDetails}
        <Button 
          style={styles.teleText} 
          title='Click for image details'
          onPress={this.handleShowDetails}>
        </Button>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    // backgroundColor: '#502F4C',
    backgroundColor: '#000',
    alignItems: 'center',
    justifyContent: 'center',
    height: 400,
    width: 400
  },
  img: {
    width: 300, 
    height: 300,
    borderRadius: 150,
    shadowColor: '#000',
    shadowRadius: 600,
    shadowOpacity: 1,
    borderWidth: 1,
    padding: 10
  },
  imageView : {
    width: 350,
    height: 350,
    backgroundColor: '#000',
    alignItems: 'center',
    justifyContent: 'center',
    borderColor: '#fff',
    borderWidth: 1,
    margin: 10
  },
  textView: {
    height: 360,
    justifyContent: 'space-between',
    alignItems: 'center',
    position: 'absolute'
  },
  teleText: {
    color: '#fff',
    fontSize: 16,
    //fontFamily: 'Avenir'
  },
  detailView: {
    position: 'absolute',
    backgroundColor: '#502F4C',    
  },
  details: {
    padding: 15,
    color: '#fff',
    fontSize: 14
  }
});

export default APOD;