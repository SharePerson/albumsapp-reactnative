import React from 'react';
import { Text, TouchableWithoutFeedback, View, LayoutAnimation } from 'react-native';
import { connect } from 'react-redux';

import { CardSection } from './common';
import * as actions from '../actions';

class ListItem extends React.Component {

    componentWillUpdate() {
      LayoutAnimation.spring();
    }

    renderDescription() {
      const { item, expanded } = this.props;
      if (expanded) {
        return (
          <CardSection>
            <Text style={{ flex: 1 }}>{item.description}</Text>
          </CardSection>
        );
      }
    }

    render() {
      const { id, title } = this.props.item;

      return (
        <TouchableWithoutFeedback onPress={() => this.props.selectLibrary(id)}>
          <View>
            <CardSection>
              <Text style={styles.titleStyle}>{title}</Text>
            </CardSection>
            {this.renderDescription()}
          </View>
        </TouchableWithoutFeedback>
      );
    }
}

const styles = {
  titleStyle: {
    fontSize: 18,
    paddingLeft: 15
  }
};

const mapStateToProps = (state, ownProps) =>
({ expanded: state.selectedLibraryId === ownProps.item.id });

export default connect(mapStateToProps, actions)(ListItem);
