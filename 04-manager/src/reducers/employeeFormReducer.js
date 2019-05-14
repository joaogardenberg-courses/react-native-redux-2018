import {
  EMPLOYEE_FORM_UPDATE,
  EMPLOYEE_CREATE,
  EMPLOYEE_UPDATE
} from '../actions/types';

const INITIAL_STATE = {
  name:  '',
  phone: '',
  shift: ''
};

export default (state = INITIAL_STATE, { type, payload }) => {
  switch(type) {
    case EMPLOYEE_FORM_UPDATE:
      return { ...state, [payload.prop]: payload.value };
    case EMPLOYEE_CREATE:
    case EMPLOYEE_UPDATE:
      return INITIAL_STATE;
    default:
      return state;
  }
};