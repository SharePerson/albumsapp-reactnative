import React from 'react';
import { connect } from 'react-redux';
import { ListView } from 'react-native';

import ListItem from './ListItem';

class LibraryList extends React.Component {

  componentWillMount() {
    const ds = new ListView.DataSource({
      rowHasChanged: (r1, r2) => r1 !== r2
    });

    this.dataSource = ds.cloneWithRows(this.props.libraries);
  }

  renderRow(library) {
    return <ListItem item={library} />;
  }

  render() {
    return (
      <ListView
        dataSource={this.dataSource}
        renderRow={this.renderRow}
      />
    );
  }
}

//objects returned from this function are
//by default in the component props
const mapStateToProps = state => ({ libraries: state.libraries });

export default connect(mapStateToProps)(LibraryList);
