import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import SearchTextInput from './src/containers/SearchTextInput.js';
import APOD from './src/components/APOD';

export default class App extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <APOD />
        <SearchTextInput />
        <Text h1>Open up App.js to start working on your app!</Text>
        <Text>Changes you make will automatically reload.</Text>
        <Text>Shake hello your phone to open the developer menu.</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
