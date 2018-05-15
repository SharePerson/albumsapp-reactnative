import React from 'react';

import { Button, Card, CardSection, TextBox } from '../common';

export default class Login extends React.Component {

  state = { email: '', password: '' };

  render() {
    return (
      <Card>
        <CardSection>
          <TextBox
          label="Email"
          placeholder="user@email.com"
          textChanged={value => this.setState({ email: value })}
          type="email-address"
          />
        </CardSection>

        <CardSection>
          <TextBox
            label="Password"
            placeholder="password"
            textChanged={value => this.setState({ password: value })}
            secure
          />
        </CardSection>

        <CardSection>
          <Button>Login</Button>
        </CardSection>
      </Card>
    );
  }
}
