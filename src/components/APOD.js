import React, { Component } from 'react';
import { AppRegistry, StyleSheet, View, ScrollView, Text, Image, TouchableHighlight } from 'react-native';
import getAPOD from '../helpers/getAPOD.js';
import NavBar from '../containers/NavBar.js';

class APOD extends Component {
  constructor(props) {
    super(props);
    this.state = {
      image: null,
      title: '',
      details: ''
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

  componentDidMount() {
    this.fetchAPOD();
  }

  render() {
    const image = !this.state.image 
      ? <Text style={{color: '#fff'}}>Loading...</Text> 
      : <Image
            style={styles.img} 
            source={this.state.image} />

    return (
      <View style={styles.container}>
        <View style={styles.imageView}>
          <View style={styles.textView}>
            <Text style={styles.teleText}>Astronomy Picture of the Day</Text>
            <Text style={styles.teleText}>{this.state.title}</Text>
          </View>
          {image}
        </View>
        <ScrollView style={styles.detailView}>
          <Text style={styles.detailsHeader}>Today's Image:</Text>
          <Text style={styles.details}>{this.state.details}</Text>
        </ScrollView>
        <NavBar />
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#000',
    alignItems: 'center',
    justifyContent: 'space-around',
    width: '100%'
  },
  img: {
    borderRadius: 150,
    borderWidth: 1,
    shadowColor: '#000',
    shadowRadius: 600,
    shadowOpacity: 1,
    padding: 10,
    height: 300,
    width: 300, 
  },
  imageView : {
    backgroundColor: '#000',
    borderColor: '#fff',
    borderWidth: 1,
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 70,
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
    color: '#fff',
    fontSize: 16,
  },
  detailView: {
    flex: 1,
    backgroundColor: 'rgba(40, 38, 64, 0.7)',
    borderColor: '#fff',
    borderWidth: 1,
    borderBottomWidth: 0,
    width: '93%',
  },
  detailsHeader: {
    backgroundColor: '#735290',
    color: '#fff',
    fontSize: 28,
    textAlign: 'center',
    padding: 10,
    width: '100%',
  },
  details: {
    color: '#fff',
    fontSize: 18,
    lineHeight: 25,
    textAlign: 'center',
    marginBottom: 105,
    padding: 20,
  }
});

export default APOD;