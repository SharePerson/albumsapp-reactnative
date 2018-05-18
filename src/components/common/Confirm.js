import React from 'react';
import { Text, View, Modal } from 'react-native';
import { CardSection } from './CardSection';
import { Button } from './Button';

class Confirm extends React.Component {
  render() {
    return (
      <Modal
        visible={this.props.visible}
        transparent={this.props.transparent || true}
        animationType={this.props.animation || 'slide'}
        onRequestClose={() => {}}
      >
        <View style={styles.containerStyle}>
          <CardSection style={styles.cardSectionStyle}>
            <Text style={styles.textStyle}>{this.props.children}</Text>
          </CardSection>
          <CardSection>
            <Button click={this.props.confirmCallback.bind(this)}>YES</Button>
            <Button click={this.props.closeCallback.bind(this)}>NO</Button>
          </CardSection>
        </View>
      </Modal>
    );
  }
}

const styles = {
  cardSectionStyle: {
    justifyContent: 'center'
  },
  textStyle: {
    flex: 1,
    fontSize: 18,
    textAlign: 'center',
    lineHeight: 40
  },
  containerStyle: {
    backgroundColor: 'rgba(0, 0, 0, 0.75)',
    position: 'relative',
    flex: 1,
    justifyContent: 'center'
  }
};

export { Confirm };
