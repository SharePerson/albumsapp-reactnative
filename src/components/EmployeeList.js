import React from 'react';
import _ from 'lodash';
import { View, ListView, Text, TouchableOpacity } from 'react-native';
import { connect } from 'react-redux';
import { Actions } from 'react-native-router-flux';

import { fetchEmployees } from '../actions';
import { CardSection, Card } from './common';

class EmployeeList extends React.Component {

  componentWillMount() {
    this.props.fetchEmployees();
    this.createDataSource(this.props);
  }

  componentWillReceiveProps(nextProps) {
    //this.props -> old set of nextProps
    //nextProps -> new set of props sent by mapStateToProps
    this.createDataSource(nextProps);
  }

  createDataSource(props) {
    const ds = new ListView.DataSource({
      rowHasChanged: (r1, r2) => r1 !== r2
    });

    this.dataSource = ds.cloneWithRows(props.employees);
  }

  renderEmployees() {
    return (
      <ListView
        enableEmptySections
        dataSource={this.dataSource}
        renderRow={this.renderRow}
      />
    );
  }

  renderRow(employee) {
    return (
      <TouchableOpacity onPress={() => Actions.employeeCreate({ employee })}>
        <Card>
          <CardSection>
            <Text style={[styles.itemTextStyle, styles.titleStyle]}>{employee.name}</Text>
          </CardSection>
          <CardSection>
            <Text style={styles.itemTextStyle}>{employee.phone}</Text>
          </CardSection>
          <CardSection>
            <Text style={styles.itemTextStyle}>{employee.shift}</Text>
          </CardSection>
        </Card>
      </TouchableOpacity>
    );
  }

  render() {
    return (
      <View>
        {this.renderEmployees()}
      </View>
    );
  }
}

const styles = {
  itemTextStyle: {
    marginLeft: 15
  },
  titleStyle: {
    fontSize: 16,
    fontWeight: 'bold'
  }
};

const mapStateToProps = (state) => ({
    employees: _.map(state.employeeList, (employee, uid) => ({ ...employee, uid }))
});

export default connect(mapStateToProps, { fetchEmployees })(EmployeeList);
