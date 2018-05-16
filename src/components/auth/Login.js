import React from 'react';
import { connect } from 'react-redux';
import { Text, View } from 'react-native';

import { Button, Card, CardSection, TextBox, Spinner } from '../common';
import { emailChanged, passwordChanged, loginUser } from '../../actions';

class Login extends React.Component {

  onEmailChange(text) {
    this.props.emailChanged(text);
  }

  onPasswordChange(text) {
    this.props.passwordChanged(text);
  }

  onButtonPress() {
    const { email, password } = this.props;
    this.props.loginUser({ email, password });
  }

  renderError() {
    if (this.props.error) {
      return (
        <View style={{ backgroundColor: 'white' }}>
          <Text style={styles.errorTextStyle}>{this.props.error}</Text>
        </View>
      );
    }
  }

  renderSpinner() {
    if (this.props.loading) {
      return (
        <View style={{ height: 40 }}>
          <Spinner size='small' />
        </View>
      );
    }
  }

  render() {
    return (
      <Card>
        <CardSection>
          <TextBox
          label="Email"
          placeholder="user@email.com"
          value={this.props.email}
          type="email-address"
          textChanged={this.onEmailChange.bind(this)}
          />
        </CardSection>

        <CardSection>
          <TextBox
            label="Password"
            placeholder="password"
            value={this.props.password}
            textChanged={this.onPasswordChange.bind(this)}
            secure
          />
        </CardSection>
        {this.renderError()}
        {this.renderSpinner()}
        <CardSection>
          <Button
          click={this.onButtonPress.bind(this)}
          >
          Login
          </Button>
        </CardSection>
      </Card>
    );
  }
}

const styles = {
  errorTextStyle: {
    color: 'red',
    fontSize: 20,
    alignSelf: 'center'
  }
};

const mapStateToProps = state => (
  {
    email: state.auth.email,
    password: state.auth.password,
    error: state.auth.error,
    loading: state.auth.loading
  }
);

export default connect(mapStateToProps, { emailChanged, passwordChanged, loginUser })(Login);
