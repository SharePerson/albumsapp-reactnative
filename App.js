import React from 'react';
import { View } from 'react-native';
import firebase from 'firebase';
import { Provider } from 'react-redux';
import { createStore } from 'redux';

import { Header, Spinner } from './src/components/common';
import Login from './src/components/auth/Login';
import Home from './src/components/Home';
import AlbumList from './src/components/AlbumList';
import TechnologyList from './src/components/TechnologyList';
import reducers from './src/reducers';
import * as fb from './src/data-access/firebase-init';

const store = createStore(reducers);

export default class App extends React.Component {

  state = { loggedIn: null, screen: 'home' };

  componentWillMount() {
    fb.initFirebase();

    firebase.auth().onAuthStateChanged((user) => {
      this.setState({ loggedIn: user != null });
    });
  }

  renderHome() {
    switch (this.state.screen) {
      case 'home':
      return (
      <View style={{ flex: 1 }}>
        <Header headerText="Home" />
        <Home
        click={screen => {
            switch (screen) {
              case 'albums':
              this.setState({ screen: 'albums' });
              break;
              case 'technologies':
              this.setState({ screen: 'technologies' });
              break;
              default:
              this.setState({ screen: 'home' });
              break;
            }
        }}
        />
      </View>
    );
      case 'albums':
      return (
        <View>
          <Header headerText="Albums" />
          <AlbumList />
        </View>
      );
      case 'technologies':
      return (
          <View style={{ flex: 1 }}>
            <Header headerText="Technologies" />
            <TechnologyList />
          </View>
      );
      default:
      break;
    }
  }

  renderAuthBased() {
    switch (this.state.loggedIn) {
      case true:
      return (
          this.renderHome()
      );
      case false:
      return (
        <View>
          <Header headerText="Log In" />
          <Login />
        </View>
      );
      default:
      return (
        <Spinner size="large" />
      );
    }
  }

  render() {
    return (
      <Provider store={store}>
        <View style={{ flex: 1 }}>
          {this.renderAuthBased()}
        </View>
      </Provider>
    );
  }
}
