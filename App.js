import React, { Component } from 'react';
import { Provider } from 'react-redux';
import { Platform } from 'react-native';
import { createStore } from 'redux';
// import { composeWithdevTools } from 'remote-redux-devtools';
// import thunk from 'redux-thunk';
// import promise from 'redux-thunk';
// import logger from 'redux-logger';
import rootReducer from './src/reducers/rootReducer.js';

import { StyleSheet, Text, ScrollView, View, Image } from 'react-native';
import Welcome from './src/components/Welcome';
import MainHeader from './src/containers/MainHeader';
import SearchTextInput from './src/containers/SearchTextInput';
import APOD from './src/components/APOD';
import NavBar from './src/containers/NavBar';

const Store = createStore(
  rootReducer
  // composeWithdevTools(
  //   applyMiddleware( thunk )
  // )
);

class App extends Component {

  render() {
    return (
      <Provider store={Store}>
        <ScrollView contentContainerStyle={styles.container}>
          {/*<Welcome />*/}
          {/*<APOD />*/}
          
          {/*<MainHeader />*/}
          <NavBar />
        </ScrollView>
      </Provider>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    alignSelf: 'stretch',
    overflow: 'scroll',
    flex: 1,
    backgroundColor: 'transparent',
    justifyContent: 'center',
    alignItems: 'center'
  },
  // navBar: {
  //   height: 300,
  //   width: '100%',
  //   flexDirection: 'row',
  //   justifyContent: 'space-around',
  //   alignItems: 'center',
  //   borderWidth: 1,
  //   borderColor: '#fff',
  //   borderRadius: 50,
  //   padding: 10
  // }
});

export default App;
