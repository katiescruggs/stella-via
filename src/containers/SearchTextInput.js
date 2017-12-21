import React, { Component } from 'react';
import { AppRegistry, TextInput, View, Text } from 'react-native';

class SearchTextInput extends Component {
  constructor(props) {
    super(props);
    this.state = {
      value: 'Search'
    };
  }

  render() {
    return (
      <TextInput 
        style={{height: 40, width: 80, backgroundColor: 'magenta'}}
        value={this.state.value}
        />
    )
  }
}

export default SearchTextInput;