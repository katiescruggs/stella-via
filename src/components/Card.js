import React from 'react';
import { View, Text } from 'react-native';

const Card = ({constellation}) => {
  return (
    <View>
      <Text>{constellation.name}</Text>
    </View>
  )
};

export default Card;