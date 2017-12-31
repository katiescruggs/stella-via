import React, { Component } from 'react';
import { Provider } from 'react-redux';
// import { Platform } from 'react-native';
import { createStore } from 'redux';
// import { composeWithdevTools } from 'remote-redux-devtools';
// import thunk from 'redux-thunk';
// import promise from 'redux-thunk';
// import logger from 'redux-logger';
import rootReducer from './src/reducers/rootReducer.js';
// import { StyleSheet, Text, ScrollView, View, Image } from 'react-native';
import CurrentView from './src/containers/CurrentView.js';

const Store = createStore(
  rootReducer
);

class App extends Component {

  render() {
    return (
      <Provider store={Store}>
        <CurrentView />
      </Provider>
    );
  }
}

// const styles = StyleSheet.create({
//   container: {
//     alignSelf: 'stretch',
//     overflow: 'scroll',
//     flex: 1,
//     backgroundColor: 'transparent',
//     justifyContent: 'center',
//     alignItems: 'center'
//   }
// });

export default App;
