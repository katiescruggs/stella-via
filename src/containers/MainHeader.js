import React from 'react';
import { View, Text, TouchableHighlight } from 'react-native';

const MainHeader = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.mainTitle}>Stella Via</Text>
      <TouchableHighlight style={styles.mainButton} onPress={enterSite} activeOpacity={0.7} underlayColor={'white'}>
        <Text style={styles.buttonText}>View Your Sky</Text>
      </TouchableHighlight>
    </View>
  );
};

const enterSite = () => {
  console.log('change page');
}

const styles = {
  container: {
    justifyContent: 'center',
    paddingTop: 60
  },
  mainTitle: {
    fontSize: 70,
  },
  mainButton: {
    borderRadius: 50,
    borderColor: 'white',
    borderWidth: 3,
    padding: 20,
    margin: 30,
  },
  buttonText: {
    alignSelf: 'center',
    color: 'white',
    fontSize: 30
  }
};

export default MainHeader;