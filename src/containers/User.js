import React from 'react';
import { View, Text } from 'react-native';
import NavBar from './NavBar.js';

const User = () => (
  <View style={{height: '100%', paddingTop: 100}}>
    <Text>I am a user component! :) </Text>
    <NavBar />
  </View>
);

export default User;