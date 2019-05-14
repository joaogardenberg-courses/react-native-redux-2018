import React    from 'react';
import firebase from 'firebase';
import { Text } from 'react-native';

import {
  Button,
  Card,
  CardSection,
  Input,
  Spinner
} from './common';

class LoginForm extends React.Component {
  state = {
    loading: false,
    email: '',
    password: '',
    error: ''
  };

  render() {
    return (
      <Card>
        <CardSection>
          <Input
            label="Email"
            placeholder="user@example.com"
            value={ this.state.email }
            onChangeText={ (email) => this.setState({ email }) }
          />
        </CardSection>

        <CardSection>
          <Input
            label="Password"
            placeholder="password"
            secureTextEntry={ true }
            value={ this.state.password }
            onChangeText={ (password) => this.setState({ password }) }
          />
        </CardSection>

        <Text style={ styles.errorTextStyle }>
          { this.state.error }
        </Text>

        <CardSection>
          { this.renderButton() }
        </CardSection>
      </Card>
    );
  }

  renderButton() {
    if (this.state.loading) {
      return <Spinner size="small" />;
    }

    return (
      <Button onPress={ this.onButtonPress }>
        Log in
      </Button>
    );
  }

  onButtonPress = () => {
    const { email, password } = this.state;

    this.setState({ loading: true, error: '' });

    firebase.auth().signInWithEmailAndPassword(email, password)
      .then(this.onLoginSuccess)
      .catch(() => {
        firebase.auth().createUserWithEmailAndPassword(email, password)
          .then(this.onLoginSuccess)
          .catch(this.onLoginFail);
      });
  };

  onLoginSuccess = () => {
    this.setState({
      loading:  false,
      email:    '',
      password: '',
      error:    ''
    });
  };

  onLoginFail = () => {
    this.setState({
      loading: false,
      error: 'Authentication failed'
    });
  };
}

const styles = {
  errorTextStyle: {
    alignSelf: 'center',
    color:     'red',
    fontSize:   20
  }
};

export default LoginForm;