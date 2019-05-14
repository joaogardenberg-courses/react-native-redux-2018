import {
  EMAIL_CHANGED,
  PASSWORD_CHANGED,
  USER_LOGIN_SUCCESS,
  USER_LOGIN_FAIL,
  USER_LOGIN
} from '../actions/types';

const INITIAL_STATE = {
  email:    '',
  password: '',
  user:     null,
  error:    '',
  loading:  false
};

export default (state = INITIAL_STATE, { type, payload }) => {
  switch(type) {
    case EMAIL_CHANGED:
      return { ...state, email: payload };
    case PASSWORD_CHANGED:
      return { ...state, password: payload };
    case USER_LOGIN_SUCCESS:
      return { ...INITIAL_STATE, user: payload };
    case USER_LOGIN_FAIL:
      return {
        ...state,
        user:    null,
        error:   'Authentication failed',
        loading: false
      };
    case USER_LOGIN:
      return {
        ...state,
        error:   '',
        loading: true
      };
    default:
      return state;
  }
};