import React from 'react';
import { TextInput, Text, View } from 'react-native';

class TextBox extends React.Component {

  render() {
    return (
      <View style={styles.containerStyle}>
        <Text style={styles.labelStyle}>{this.props.label}</Text>
        <TextInput
          placeholder={this.props.placeholder}
          autoCorrect={false}
          onChangeText={text => {
            this.props.textChanged(text);
          }}
          value={this.props.value}
          style={styles.inputStyle}
          secureTextEntry={this.props.secure}
          keyboardType={this.props.type}
        />
      </View>
    );
  }
}

const styles = {
  containerStyle: {
    flexDirection: 'row',
    flex: 1,
    height: 40,
    alignItems: 'center'
  },
  labelStyle: {
    fontSize: 18,
    paddingLeft: 20,
    flex: 1,
    color: '#808080'
  },
  inputStyle: {
    color: '#000',
    paddingLeft: 5,
    paddingRight: 5,
    fontSize: 18,
    lineHeight: 23,
    flex: 2
  }
};

export { TextBox };
