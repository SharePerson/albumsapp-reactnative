import React from 'react';
import { connect } from 'react-redux';

import { Button, Card, CardSection, TextBox } from '../common';
import { emailChanged, passwordChanged } from '../../actions';

class Login extends React.Component {

  onEmailChange(text) {
    this.props.emailChanged(text);
  }

  onPasswordChange(text) {
    this.props.passwordChanged(text);
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
        <CardSection>
          <Button
          click={() => console.log(this.props.email, ' _ ', this.props.password)}
          >
          Login
          </Button>
        </CardSection>
      </Card>
    );
  }
}

const mapStateToProps = state => ({ email: state.auth.email, password: state.auth.password });

export default connect(mapStateToProps, { emailChanged, passwordChanged })(Login);
