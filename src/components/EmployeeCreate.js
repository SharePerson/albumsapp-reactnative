import React from 'react';
import { connect } from 'react-redux';

import { Button, CardSection, Card, Spinner, TextBox } from './common';
import { employeeUpdate } from '../actions';

class EmployeeCreate extends React.Component {
  render() {
    return (
      <Card>
        <CardSection>
          <TextBox
            label="Name"
            placeholder="Jane"
            textChanged={(name) => this.props.employeeUpdate({ prop: 'name', value: name })}
            value={this.props.name}
          />
        </CardSection>
        <CardSection>
          <TextBox
            label="Phone"
            placeholder="555-555-5555"
            textChanged={(phone) => this.props.employeeUpdate({ prop: 'phone', value: phone })}
            value={this.props.phone}
          />
        </CardSection>
        <CardSection>

        </CardSection>
        <CardSection>
          <Button>Create</Button>
        </CardSection>
      </Card>
    );
  }
}

const mapStateToProps = (state) => ({
    name: state.employeeForm.name,
    phone: state.employeeForm.phone,
    shift: state.employeeForm.shift
});

export default connect(mapStateToProps, { employeeUpdate })(EmployeeCreate);
