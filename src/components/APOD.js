import React, { Component } from 'react';
import { AppRegistry, View, Text, Image } from 'react-native';
import { nasaKey } from '../helpers/apiKey.js';

class APOD extends Component {
  constructor(props) {
    super(props);
    this.state = {
      image: {}
    };
  }

  fetchAPOD = () => {
    console.log('function called')
    // try {
      fetch(`https://api.nasa.gov/planetary/apod?api_key=${nasaKey}`)
      .then(response => response.json())
      .then(data => this.setState({image: {uri: data.url}}))
      
      // console.log(apodData)
      // const image = {uri: apodData}
      // this.setState({ image })
    // } catch(error) {
    //   const image = {uri: 'https://www.rugbywarfare.com/store/wp-content/uploads/2017/04/random-image-005.jpg'}
    //   this.setState({ image })
    // }
    
  }

  componentDidMount() {
    console.log('did mount')
    this.fetchAPOD()
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
          style={{width: 200, height: 200}} 
          source={source}
        />
      </View>
    )
  }
}

export default APOD;