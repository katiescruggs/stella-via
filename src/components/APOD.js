import React, { Component } from 'react';
import { AppRegistry, StyleSheet, View, Text, Image, Button } from 'react-native';
import getAPOD from '../helpers/getAPOD.js';

class APOD extends Component {
  constructor(props) {
    super(props);
    this.state = {
      image: {},
      title: '',
      description: ''

    };
  }

  fetchAPOD = async () => {
      console.log('function called in app');
      const apodData = await getAPOD();
      console.log(apodData)

      const image = !apodData 
        ? { uri: 'https://www.rugbywarfare.com/store/wp-content/uploads/2017/04/random-image-005.jpg' }
        : { uri: apodData.url }

      const title = apodData.title
      const description = apodData.explanation
      console.log(title)
      console.log(description)
      this.setState({ image, title, description });
  }

  async componentDidMount() {
    console.log('did mount')
    await this.fetchAPOD()
  }

  render() {
    let source;
    if (this.state.image.uri) {
      console.log(this.state.image)
      source = this.state.image
    }
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
            onPress={() => console.log('pressed')}>
            </Button>
        </View>
        <Text>{this.state.description}</Text>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    // width: 400,
    // margin: 20,
    backgroundColor: '#502F4C',
    alignItems: 'center',
    justifyContent: 'center',
  },
  img: {
    width: 300, 
    height: 300,
    // backgroundColor: 'transparent',
    // borderWidth: 100,
    // borderColor: '#f5dd90',
    borderRadius: 200,
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
  }
});

export default APOD;