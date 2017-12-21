import React, { Component } from 'react';
import { AppRegistry, View, Text, Image } from 'react-native';

class APOD extends Component {
  constructor(props) {
    super(props);
    this.state = {
      
    };
  }

  render() {
    return (
      <View>
        <Image
          style={{width: 50, height: 50}} 
          source={{uri: 'http://globalmedicalco.com/photos/globalmedicalco/20/100048.jpg'}}
        />
      </View>
    )
  }
}

export default APOD;