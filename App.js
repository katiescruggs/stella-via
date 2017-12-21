import React from 'react';
import { StyleSheet, Text, ScrollView } from 'react-native';
import SearchTextInput from './src/containers/SearchTextInput.js';
import APOD from './src/components/APOD';

export default class App extends React.Component {
  render() {
    return (
      <ScrollView contentContainerStyle={styles.container}>
        <SearchTextInput />
        <APOD />
      </ScrollView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    // height: 2000,
    overflow: 'scroll',
    // flex: 1,
    backgroundColor: '#502F4C',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
