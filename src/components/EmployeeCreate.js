import React from 'react';
import { connect } from 'react-redux';
import { Picker, Text } from 'react-native';
import _ from 'lodash';
import { text } from 'react-native-communications';

import { Button, CardSection, Card, TextBox, Spinner, Confirm } from './common';
import { employeeUpdate, employeeSave, employeeEdit, resetForm, employeeDelete } from '../actions';

class EmployeeCreate extends React.Component {

  state = { showModal: false };

  componentWillMount() {
    if (this.props.employee) {
      this.props = { ...this.props, ...this.props.employee };

      //the following code updates the reducer with each property
      //to maintain the state with the selected employee from EmployeeList
      _.each(this.props.employee, (value, prop) => {
        this.props.employeeUpdate({ prop, value });
      });
    } else {
      this.props.resetForm();
    }
  }

  onCreateButtonPress() {
    const { name, phone, shift } = this.props;
    this.props.employeeSave({ name, phone, shift: shift || 'Monday' });
  }

  onSaveButtonPress() {
    const { uid, name, phone, shift } = this.props;
    this.props.employeeEdit({ uid, name, phone, shift });
  }

  onDeleteButtonPress() {
    this.setState({ showModal: true });
  }

  onTextButtonPress() {
    const { phone, shift } = this.props;
    text(phone, `Your upcoming shift is on ${shift}`);
  }

  onAccept() {
    this.setState({ showModal: false });
    const { uid } = this.props;
    this.props.employeeDelete({ uid });
  }

  renderButton() {
    if (this.props.loading) {
      return (
        <Spinner size="small" />
      );
    }

    if (this.props.uid && this.props.uid.length > 0) {
      return (
        <CardSection style={{ flex: 1 }}>
          <Button click={this.onSaveButtonPress.bind(this)}>Save</Button>
          <Button click={this.onTextButtonPress.bind(this)}>Text</Button>
          <Button click={this.onDeleteButtonPress.bind(this)}>Fire</Button>
        </CardSection>
      );
    }

    return (
      <Button click={this.onCreateButtonPress.bind(this)}>Create</Button>
    );
  }

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
          <Text style={styles.pickerLabelStyle}>Shift</Text>
          <Picker
            selectedValue={this.props.shift}
            onValueChange={day => this.props.employeeUpdate({ prop: 'shift', value: day })}
            style={{ flex: 1 }}
          >
            <Picker.Item label="Monday" value="Monday" />
            <Picker.Item label="Tuesday" value="Tuesday" />
            <Picker.Item label="Wednesday" value="Wednesday" />
            <Picker.Item label="Thursday" value="Thursday" />
            <Picker.Item label="Friday" value="Friday" />
            <Picker.Item label="Saturday" value="Saturday" />
            <Picker.Item label="Sunday" value="Sunday" />
          </Picker>
        </CardSection>
        <CardSection style={styles.buttonContainerStyle}>
          {this.renderButton()}
        </CardSection>

        <Confirm
          visible={this.state.showModal}
          confirmCallback={() => { this.onAccept(); }}
          closeCallback={() => { this.setState({ showModal: false }); }}
        >
         Are you sure you want to fire {this.props.name}?
        </Confirm>
      </Card>
    );
  }
}

const styles = {
  pickerLabelStyle: {
    fontSize: 18,
    paddingLeft: 20,
    color: '#808080'
  },
  buttonContainerStyle: {
    minHeight: 50
  }
};

const mapStateToProps = (state) => ({
    uid: state.employeeForm.uid,
    name: state.employeeForm.name,
    phone: state.employeeForm.phone,
    shift: state.employeeForm.shift,
    loading: state.employeeForm.loading
});

export default connect(mapStateToProps,
  {
    employeeUpdate,
    employeeSave,
    employeeEdit,
    resetForm,
    employeeDelete
  })(EmployeeCreate);
