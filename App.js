import React from 'react';
import { StyleSheet, Text, ScrollView } from 'react-native';
import SearchTextInput from './src/containers/SearchTextInput.js';
import APOD from './src/components/APOD';
import { Platform } from 'react-native';
import { createStore, applyMiddleware } from 'redux';
import { composeWithdevTools } from 'remote-redux-devtools';
import thunk from 'redux-thunk';
// import promise from 'redux-thunk';
// import logger from 'redux-logger';
import rootReducer from '../reducers/rootReducer.js';

const Store = creatStore(
  rootReducer,
  composeWithdevTools(
    applyMiddleware( thunk )
  )
);

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
