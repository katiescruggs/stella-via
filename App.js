import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

export default class App extends React.Component {
  render() {
    const hello = '';
    return (
      <View style={styles.container}>
        <Text h1>Stella Via</Text>
        <Text>{hello}</Text>
        <Text>whats up?</Text>
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
