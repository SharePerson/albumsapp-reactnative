import { EMPLOYEE_UPDATE, EMPLOYEE_SAVE } from './types';

export const employeeUpdate = ({ prop, value }) => ({
    type: EMPLOYEE_UPDATE, payload: { prop, value }
  });

  export const employeeSave = ({ name, phone, shift }) => {
    console.log(name, '_', phone, '_', shift);
    return { type: EMPLOYEE_SAVE, payload: { name, phone, shift } };
  };
