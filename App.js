import React from 'react';
import { Provider } from 'react-redux';
import { StyleSheet, Text, ScrollView, View } from 'react-native';
import SearchTextInput from './src/containers/SearchTextInput.js';
import APOD from './src/components/APOD';
import { Platform } from 'react-native';
import { createStore } from 'redux';
// import { composeWithdevTools } from 'remote-redux-devtools';
// import thunk from 'redux-thunk';
// import promise from 'redux-thunk';
// import logger from 'redux-logger';
import rootReducer from './src/reducers/rootReducer.js';
import MainHeader from './src/containers/MainHeader.js';

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
          <MainHeader />
          <APOD />
          <View style={styles.navBar}><Text>navBar</Text></View>
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
    backgroundColor: '#363457',
    justifyContent: 'space-around',
    alignItems: 'center'
  },
  navBar: {
    height: '10%',
    width: '100%',
    justifyContent: 'center',
    alignItems: 'center'
  }
});
