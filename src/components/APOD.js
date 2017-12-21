import React, { Component } from 'react';
import { AppRegistry, View, Text, Image } from 'react-native';

class APOD extends Component {
  constructor(props) {
    super(props);
    this.state = {
      image: {uri: 'https://www.rugbywarfare.com/store/wp-content/uploads/2017/04/random-image-005.jpg'}
    };
  }

  fetchAPOD = () => {
    console.log('function called')
    // try {
      fetch(`https://api.nasa.gov/planetary/apod?api_key=${nasaKey}`)
      .then(data => JSON.parse(data))
      .then(data => console.log(data))
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
    console.log('hi')
    return (
      <View>
        <Image
          style={{width: 50, height: 50}} 
          source={this.state.image}
        />
      </View>
    )
  }
}

export default APOD;