import firebase from 'firebase';

export const initFirebase = () => {
    firebase.initializeApp({
    apiKey: 'AIzaSyDZ56iqRtcILZYvE29n0DWQMth6-Ehd-V4',
    authDomain: 'react-native-albums-79433.firebaseapp.com',
    databaseURL: 'https://react-native-albums-79433.firebaseio.com',
    projectId: 'react-native-albums-79433',
    storageBucket: 'react-native-albums-79433.appspot.com',
    messagingSenderId: '710741411860'
  });
};
