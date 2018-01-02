import React, { Component } from 'react';
import { connect } from 'react-redux';
import NavBar from './NavBar.js';
import { colors } from '../assets/colors.js';
import {
  StyleSheet,
  TextInput,
  View,
  Text,
  TouchableHighlight
} from 'react-native';

class UserModal extends Component {
  constructor(props) {
    super(props);
    this.state = {
      username: '',
      password: ''
    };
  };

  render() {
    return (
      <View style={styles.mainContainer}>
        <View style={styles.modalContainer}>
          <Text style={styles.modalTitle}>
            Log In
          </Text>
          <View style={styles.inputContainer}>
            <TextInput
              style={styles.modalTextInput}
              value={this.state.username}
              placeholder='Username'
              onChangeText={this.handleInputChange}
            />

            <TextInput
              style={styles.modalTextInput}
              value={this.state.password}
              placeholder='Password'
              onChangeText={this.handleInputChange}
            />

            <TouchableHighlight
              style={styles.modalButton}
              onPress={this.handleUserSubmit}>
              <Text style={styles.modalButtonText}>
                Log In
              </Text>
            </TouchableHighlight>
          </View>
        </View>
        <NavBar />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    alignContent: 'center',
    justifyContent: 'center'
  },
  modalContainer: {
    alignSelf: 'center',
    backgroundColor: colors.$white,
    borderColor: colors.$redPurple,
    borderWidth: 7,
    justifyContent: 'center',
    minHeight: 300,
    padding: 20,
    width: '95%'
  },
  inputContainer: {
    justifyContent: 'space-between',
    height: 200
  },
  modalTitle: {
    alignSelf: 'center',
    fontSize: 30,
    marginBottom: 20
  },
  modalButton: {
    alignSelf: 'center',
    backgroundColor: colors.$lavender,
    borderColor: colors.$lavender,
    borderRadius: 25,
    borderWidth: 2,
    padding: 10
  },
  modalButtonText: {
    fontSize: 20
  },
  modalTextInput: {
    borderColor: colors.$redPurple,
    borderWidth: 1,
    fontSize: 20,
    padding: 10,
    marginBottom: 10
  }
});

export default UserModal;