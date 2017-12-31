import React from 'react';
import { StyleSheet, View, Text } from 'react-native';
import NavBar from './NavBar.js';

const User = () => (
  <View style={styles.container}>
    <Text>I am a user component! :) </Text>
    <NavBar />
  </View>
);

const styles = StyleSheet.create({
  container: {
    height: '100%', 
    paddingTop: 100
  }
});

export default User;