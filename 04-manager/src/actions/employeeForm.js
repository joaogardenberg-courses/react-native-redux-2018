import { EMPLOYEE_FORM_UPDATE } from './types';

export const employeeFormUpdate = ({ prop, value }) => {
  return {
    type: EMPLOYEE_FORM_UPDATE,
    payload: { prop, value }
  }
};