import React, { Component } from 'react';
import { AppRegistry, StyleSheet, View, ScrollView, Text, Image, TouchableHighlight } from 'react-native';
import getAPOD from '../helpers/getAPOD.js';

class APOD extends Component {
  constructor(props) {
    super(props);
    this.state = {
      image: null,
      title: '',
      details: '',
      // showDetails: false

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

  // handleShowDetails = () => {
  //   const showDetails = !this.state.showDetails
  //   this.setState({ showDetails });
  // }

  render() {
    // const imageDetails = this.state.showDetails 
    //   ? <ScrollView style={styles.detailView}><Text style={styles.details}>{this.state.details}</Text></ScrollView> 
    //   : null;
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
        {/*<TouchableHighlight style={styles.detailsButton} onPress={this.handleShowDetails} activeOpacity={0.7} underlayColor={'#735290'}>
                  <Text style={styles.teleText}>Image Details</Text>
                </TouchableHighlight>*/}
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
    // flex: 1,
    width: '93%',
    height: 350,
    backgroundColor: '#000',
    alignItems: 'center',
    justifyContent: 'center',
    borderColor: '#fff',
    borderWidth: 1,
    marginTop: 70,
    marginBottom: 20
  },
  textView: {
    height: 355,
    justifyContent: 'space-between',
    alignItems: 'center',
    position: 'absolute',
    zIndex: 10
  },
  upperText: {
    width: '90%',
    flexDirection: 'row',
    justifyContent: 'space-between'
  },
  teleText: {
    color: '#fff',
    fontSize: 16,
  },
  detailView: {
    flex: 1,
    backgroundColor: '#735290',
    borderColor: '#fff',
    borderWidth: 1,
    borderBottomWidth: 0,
    width: '93%'
  },
  detailsHeader: {
    padding: 15,
    color: '#fff',
    fontSize: 34,
    textAlign: 'center',
    backgroundColor: 'rgba(40, 38, 64, 0.7)',
    width: '100%'
  },
  details: {
    padding: 20,
    color: '#fff',
    fontSize: 16,
    textAlign: 'center'
  },
  // detailsButton: {
  //   borderRadius: 50,
  //   borderColor: '#fff',
  //   borderWidth: 1,
  //   padding: 5
  // }
});

export default APOD;