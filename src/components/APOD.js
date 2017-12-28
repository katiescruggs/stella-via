import React, { Component } from 'react';
import { AppRegistry, StyleSheet, View, ScrollView, Text, Image, TouchableHighlight } from 'react-native';
import getAPOD from '../helpers/getAPOD.js';

class APOD extends Component {
  constructor(props) {
    super(props);
    this.state = {
      image: { url: 'https://www.wordwizardsinc.com/wp-content/uploads/2016/08/nasalogo.png' },
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

  componentDidMount() {
    this.fetchAPOD();
  }

  handleShowDetails = () => {
    const showDetails = !this.state.showDetails
    this.setState({ showDetails });
  }

  render() {
    const imageDetails = this.state.showDetails 
      ? <ScrollView style={styles.detailView}><Text style={styles.details}>{this.state.details}</Text></ScrollView> 
      : null;

    return (
      <View style={styles.container}>
        <View style={styles.imageView}>
          <View style={styles.textView}>
            <View style={styles.upperText}>
              <Text style={styles.teleText}>Astronomy Image of the Day</Text>
              <Text style={styles.teleText}>12.27.17</Text>
            </View>
            <Text style={styles.teleText}>{this.state.title}</Text>
          </View>
          <Image
            style={styles.img} 
            source={this.state.image}
          />
        </View>
        {imageDetails}
        <TouchableHighlight style={styles.detailsButton} onPress={this.handleShowDetails} activeOpacity={0.7} underlayColor={'#735290'}>
          <Text style={styles.teleText}>Image Details</Text>
        </TouchableHighlight>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#000',
    alignItems: 'center',
    justifyContent: 'center',
    height: '55%',
    width: '100%'
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
  upperText: {
    width: '90%',
    flexDirection: 'row',
    justifyContent: 'space-between'
  },
  teleText: {
    color: '#fff',
    fontSize: 16,
    fontFamily: 'Avenir'
  },
  detailView: {
    position: 'absolute',
    backgroundColor: '#502F4C',    
  },
  detailsButton: {
    borderRadius: 50,
    borderColor: '#fff',
    borderWidth: 1,
    padding: 5
  },
  details: {
    padding: 15,
    color: '#fff',
    fontSize: 14
  }
});

export default APOD;