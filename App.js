import React from 'react';
import { Provider } from 'react-redux';
import { StyleSheet, Text, ScrollView } from 'react-native';
import SearchTextInput from './src/containers/SearchTextInput.js';
import APOD from './src/components/APOD';
import { Platform } from 'react-native';
import { createStore } from 'redux';
// import { composeWithdevTools } from 'remote-redux-devtools';
// import thunk from 'redux-thunk';
// import promise from 'redux-thunk';
// import logger from 'redux-logger';
import rootReducer from './src/reducers/rootReducer.js';

const Store = createStore(
  rootReducer
  // composeWithdevTools(
  //   applyMiddleware( thunk )
  // )
);

export default class App extends React.Component {
  render() {
    return (
      <Provider store={Store}>
        <ScrollView contentContainerStyle={styles.container}>
          <SearchTextInput />
          <APOD />
        </ScrollView>
      </Provider>
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
