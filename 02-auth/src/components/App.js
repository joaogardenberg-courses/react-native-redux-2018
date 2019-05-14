import React    from 'react';
import firebase from 'firebase';

import {
  View
} from 'react-native';

import LoginForm  from './LoginForm';

import {
  Header,
  Button,
  Spinner
} from './common';

class App extends React.Component {
  state = { loggedIn: null };

  render() {
    return (
      <View>
        <Header headerText="Authentication" />
        { this.renderContent() }
      </View>
    );
  }

  renderContent() {
    switch (this.state.loggedIn) {
      case true:
        return (
          <Button onPress={ () => firebase.auth().signOut() }>
            Log out
          </Button>
        );
      case false:
        return <LoginForm />;
      default:
        return <Spinner size="large" />;
    }
  }

  componentDidMount() {
    firebase.initializeApp({
      apiKey:            'AIzaSyDoFteYNDpk4OfNdP0p_-lkRYMh3STZQZw',
      authDomain:        'react-course-auth-6be42.firebaseapp.com',
      databaseURL:       'https://react-course-auth-6be42.firebaseio.com',
      projectId:         'react-course-auth-6be42',
      storageBucket:     'react-course-auth-6be42.appspot.com',
      messagingSenderId: '428272873539'
    });

    firebase.auth().onAuthStateChanged((user) => {
      this.setState({ loggedIn: !!user });
    });
  }
}

export default App;