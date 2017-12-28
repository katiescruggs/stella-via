import React from 'react';
import { View, Text, TouchableHighlight } from 'react-native';

const MainHeader = () => {
  return (
    <View>
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
  mainTitle: {
    fontSize: 80,
    alignSelf: 'center',
    padding: 30
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
    fontSize: 40
  }
};

export default MainHeader;