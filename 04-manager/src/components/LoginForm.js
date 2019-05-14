import React       from 'react';
import { connect } from 'react-redux';

import {
  View,
  Text
} from 'react-native';

import {
  emailChanged,
  passwordChanged,
  logUserIn
} from '../actions';

import {
  Card,
  CardSection,
  Input,
  Button,
  Spinner
} from './common';

class LoginForm extends React.Component {
  render() {
    return (
      <Card>
        <CardSection>
          <Input
            label="Email"
            placeholder="email@example.com"
            value={ this.props.email }
            onChangeText={ this.onEmailChange }
          />
        </CardSection>

        <CardSection>
          <Input
            label="Password"
            placeholder="password"
            secureTextEntry
            value={ this.props.password }
            onChangeText={ this.onPasswordChange }
          />
        </CardSection>

        { this.renderError() }

        <CardSection>
          { this.renderButton() }
        </CardSection>
      </Card>
    );
  }

  renderError() {
    if (this.props.error) {
      return (
        <View style={{ backgroundColor: 'white' }}>
          <Text style={ styles.errorTextStyle }>
            { this.props.error }
          </Text>
        </View>
      );
    }
  }

  renderButton() {
    if (this.props.loading) {
      return <Spinner size="small" />
    }

    return (
      <Button onPress={ this.onButtonPress }>
        Log in
      </Button>
    );
  }

  onEmailChange = (text) => {
    this.props.emailChanged(text);
  };

  onPasswordChange = (text) => {
    this.props.passwordChanged(text);
  };

  onButtonPress = () => {
    const { email, password } = this.props;
    this.props.logUserIn(email, password);
  };
}

const styles = {
  errorTextStyle: {
    alignSelf: 'center',
    color:     'red',
    fontSize:  20
  }
};

const mapStateToProps = ({ auth: { email, password, error, loading } }) => {
  return { email, password, error, loading };
};

LoginForm = connect(
  mapStateToProps,
  {
    emailChanged,
    passwordChanged,
    logUserIn
  }
)(LoginForm);

export default LoginForm;