import React           from 'react';
import { Provider }    from 'react-redux';
import firebase        from 'firebase';
import thunk           from 'redux-thunk';

import {
  createStore,
  applyMiddleware
} from 'redux';

import reducers from './reducers';
import Router   from './Router';

class App extends React.Component {
  render() {
    const store = createStore(reducers, {}, applyMiddleware(thunk))

    return (
      <Provider store={ store }>
        <Router />
      </Provider>
    );
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
  }
}

export default App;