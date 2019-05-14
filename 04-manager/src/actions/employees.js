import firebase    from 'firebase';
import { Actions } from 'react-native-router-flux';

import {
  EMPLOYEE_CREATE,
  EMPLOYEE_UPDATE,
  EMPLOYEES_FETCH
} from './types';

export const employeesFetch = () => (dispatch) => {
  const { currentUser: { uid } } = firebase.auth();

  firebase.database().ref(`/users/${uid}/employees`)
    .on('value', (snapshot) => {
      dispatch({
        type:    EMPLOYEES_FETCH,
        payload: snapshot.val()
      });
    });
};

export const employeeCreate = ({ name, phone, shift }) => (dispatch) => {
  const { currentUser: { uid } } = firebase.auth();

  firebase.database().ref(`/users/${uid}/employees`)
    .push({ name, phone, shift })
    .then(() => {
      dispatch({ type: EMPLOYEE_CREATE });
      Actions.pop();
    });
};

export const employeeUpdate = ({ name, phone, shift, uid }) => (dispatch) => {
  const { currentUser } = firebase.auth();

  firebase.database().ref(`/users/${currentUser.uid}/employees/${uid}`)
    .set({ name, phone, shift })
    .then(() => {
      dispatch({ type: EMPLOYEE_UPDATE });
      Actions.pop();
    });
};

export const employeeDestroy = ({ uid }) => () => {
  const { currentUser } = firebase.auth();

  firebase.database().ref(`/users/${currentUser.uid}/employees/${uid}`)
    .remove()
    .then(() => {
      Actions.pop();
    });
};