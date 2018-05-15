import React from 'react';
import { View } from 'react-native';
import firebase from 'firebase';

import { Header } from './src/components/common';
import Login from './src/components/auth/Login';

//import AlbumList from './src/components/AlbumList';

export default class App extends React.Component {

  componentWillMount() {
      firebase.initializeApp({
      apiKey: 'AIzaSyDZ56iqRtcILZYvE29n0DWQMth6-Ehd-V4',
      authDomain: 'react-native-albums-79433.firebaseapp.com',
      databaseURL: 'https://react-native-albums-79433.firebaseio.com',
      projectId: 'react-native-albums-79433',
      storageBucket: 'react-native-albums-79433.appspot.com',
      messagingSenderId: '710741411860'
    });
  }

  render() {
    return (
      <View style={{ flex: 1 }}>
        <Header headerText="Albums" />
        <Login />
      </View>
    );
  }
}
