import firebase from 'firebase';
import { Actions } from 'react-native-router-flux';

import { EMPLOYEE_UPDATE, EMPLOYEE_SAVED, EMPLOYE_SAVE_START } from './types';

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
