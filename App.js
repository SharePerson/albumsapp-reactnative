import React from 'react';
import firebase from 'firebase';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import ReduxThunk from 'redux-thunk';

import reducers from './src/reducers';
import * as fb from './src/data-access/firebase-init';
import Router from './src/Router';

const store = createStore(reducers, {}, applyMiddleware(ReduxThunk));

export default class App extends React.Component {

  state = { loggedIn: null, screen: 'home' };

  componentWillMount() {
    fb.initFirebase();

    firebase.auth().onAuthStateChanged((user) => {
      this.setState({ loggedIn: user != null });
    });
  }

  render() {
    return (
      <Provider store={store}>
        <Router />
      </Provider>
    );
  }
}
