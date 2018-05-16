import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import firebase from 'firebase';

import { Button } from './common';

export default class Home extends React.Component {

  render() {
    return (
      <View style={styles.homeContainer}>
        <View style={styles.boxesContainerStyle}>
          <TouchableOpacity
          style={styles.boxStyle}
          onPress={() => {
              this.props.click('albums');
            }
          }
          >
            <View>
              <Text>Albums</Text>
            </View>
          </TouchableOpacity>
          <TouchableOpacity
          style={styles.boxStyle}
          onPress={() => {
              this.props.click('technologies');
            }
          }
          >
            <View>
              <Text>Technologies</Text>
            </View>
          </TouchableOpacity>
          <TouchableOpacity
          style={styles.boxStyle}
          onPress={() => {
              this.props.click('employee-list');
            }
          }
          >
            <View>
              <Text>Employee List</Text>
            </View>
          </TouchableOpacity>
        </View>
        <View style={styles.logoutContainer}>
          <Button click={() => firebase.auth().signOut()}>Log Out</Button>
        </View>
      </View>
    );
  }
}

const styles = {
    homeContainer: {
      justifyContent: 'space-around',
      flexDirection: 'column'
    },
    boxesContainerStyle: {
      justifyContent: 'space-around',
      flexDirection: 'row',
      marginTop: 10
    },
    logoutContainer: {
      height: 40
    },
    boxStyle: {
      backgroundColor: '#d9d9d9',
      borderRadius: 5,
      borderColor: '#cccccc',
      borderWidth: 1,
      height: 100,
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
      margin: 10
    }
};
