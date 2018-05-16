import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import { Actions } from 'react-native-router-flux';

import { Button } from './common';

class Home extends React.Component {

  render() {
    return (
      <View style={styles.homeContainer}>
        <View style={styles.boxesContainerStyle}>

          <TouchableOpacity
          style={styles.boxStyle}
          onPress={() => {
              Actions.albumList();
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
              Actions.technologyList();
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
              Actions.employeeList();
            }
          }
          >
            <View>
              <Text>Employee List</Text>
            </View>
          </TouchableOpacity>

        </View>
        
        <View style={styles.logoutContainer}>
          <Button>Log Out</Button>
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

export { Home };
