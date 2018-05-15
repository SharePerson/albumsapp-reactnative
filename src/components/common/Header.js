//define imports
import React from 'react';
import { Text, View } from 'react-native';

// create the Component
 const Header = (props) => {
   const { textStyle, viewStyle } = styles;
   return (
      <View style={viewStyle}>
        <Text style={textStyle}>{props.headerText}</Text>
      </View>
   );
};

//define the component styles
const styles = {
  viewStyle: {
    backgroundColor: '#F8F8F8',
    justifyContent: 'center',
    alignItems: 'center',
    height: 60,
    paddingTop: 15,
    marginTop: 30,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    elevation: 2,
    position: 'relative'
  },
  textStyle: {
    fontSize: 20
  }
};

//export the component to make it available for other components in the app
export { Header };
