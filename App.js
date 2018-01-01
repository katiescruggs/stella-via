import React, { Component } from 'react';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import rootReducer from './src/reducers/rootReducer';
import CurrentView from './src/containers/CurrentView';

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
};

export default App;
