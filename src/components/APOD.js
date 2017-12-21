import React, { Component } from 'react';
import { AppRegistry, View, Text, Image } from 'react-native';
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
      <View>
        <Image
          style={{width: 300, height: 300}} 
          source={source}
        />
        <Text>{this.state.title}</Text>
        <Text>{this.state.description}</Text>
      </View>
    )
  }
}

export default APOD;