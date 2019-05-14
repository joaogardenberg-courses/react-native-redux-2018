import { EMPLOYEES_FETCH } from '../actions/types';

const INITIAL_STATE = {};

export default (state = INITIAL_STATE, { type, payload }) => {
  switch (type) {
    case EMPLOYEES_FETCH:
      return payload;
    default:
      return state;
  }
};