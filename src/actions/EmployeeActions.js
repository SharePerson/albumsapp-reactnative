import firebase from 'firebase';
import { Actions } from 'react-native-router-flux';

import
  {
    EMPLOYEE_UPDATE,
    EMPLOYEE_SAVED,
    EMPLOYE_SAVE_START,
    EMPLOYEE_FETCH_SUCCESS
  } from './types';

export const employeeUpdate = ({ prop, value }) => ({
    type: EMPLOYEE_UPDATE, payload: { prop, value }
  });

export const employeeSave = ({ name, phone, shift }) => {
  const { currentUser } = firebase.auth();

  return (dispatch) => {
    dispatch({ type: EMPLOYE_SAVE_START });

    firebase.database().ref(`/users/${currentUser.uid}/employees`)
    .push({ name, phone, shift })
    .then(() => {
      Actions.pop(); //you can also pass the scene key to pop to
      dispatch({ type: EMPLOYEE_SAVED });
    });
  };
};

export const fetchEmployees = () => {
  const { currentUser } = firebase.auth();

  return (dispatch) => {
    firebase.database().ref(`/users/${currentUser.uid}/employees`)
      .on('value', snapshot => {
          dispatch({ type: EMPLOYEE_FETCH_SUCCESS, payload: snapshot.val() });
      });
  };
};

export const employeeEdit = ({ uid, name, phone, shift }) => {
  const { currentUser } = firebase.auth();

  return (dispatch) => {
    dispatch({ type: EMPLOYE_SAVE_START });

    firebase.database().ref(`/users/${currentUser.uid}/employees/${uid}`)
    .set({ name, phone, shift })
    .then(() => {
      Actions.pop(); //you can also pass the scene key to pop to
      dispatch({ type: EMPLOYEE_SAVED });
    });
  };
};

export const resetForm = () => ({ type: EMPLOYEE_SAVED });
