import firebase    from 'firebase';
import { Actions } from 'react-native-router-flux';

import {
  EMAIL_CHANGED,
  PASSWORD_CHANGED,
  USER_LOGIN_SUCCESS,
  USER_LOGIN_FAIL,
  USER_LOGIN
} from './types';

export const emailChanged = (text) => {
  return {
    type:    EMAIL_CHANGED,
    payload: text
  };
};

export const passwordChanged = (text) => {
  return {
    type:    PASSWORD_CHANGED,
    payload: text
  };
};

export const logUserIn = (email, password) => (dispatch) => {
  dispatch({ type: USER_LOGIN });

  firebase.auth().signInWithEmailAndPassword(email, password)
    .then((user) => logUserInSuccess(dispatch, user))
    .catch(() => {
      firebase.auth().createUserWithEmailAndPassword(email, password)
        .then((user) => logUserInSuccess(dispatch, user))
        .catch(() => logUserInFail(dispatch));
    });
};

const logUserInSuccess = (dispatch, user) => {
  dispatch({
    type:    USER_LOGIN_SUCCESS,
    payload: user
  });

  Actions.main();
};

const logUserInFail = (dispatch) => {
  dispatch({ type: USER_LOGIN_FAIL });
};