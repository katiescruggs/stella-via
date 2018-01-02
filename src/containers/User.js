import React from 'react';
import { StyleSheet, View, Text, TouchableHighlight } from 'react-native';
import NavBar from './NavBar.js';
import { colors } from '../assets/colors.js';
import { connect } from 'react-redux';
import { logOut, changePage } from '../actions';

const User = ({logOut, changePage}) => (
  <View style={styles.container}>
    <Text>I am a user component! :) </Text>
    <TouchableHighlight
      style={styles.modalButton}
      onPress={() => {
        logOut();
        changePage('Welcome');
      }}>
      <Text style={styles.modalButtonText}>
        Log Out
      </Text>
    </TouchableHighlight>
    <NavBar />
  </View>
);

const styles = StyleSheet.create({
  container: {
    height: '100%', 
    paddingTop: 100
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
  }
});

const mapDispatchToProps = dispatch => ({
  logOut: () => {
    dispatch(logOut());
  },
  changePage: page => {
    dispatch(changePage(page));
  }
});

export default connect(null, mapDispatchToProps)(User);