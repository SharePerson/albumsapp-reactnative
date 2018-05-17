import
  {
    EMPLOYEE_UPDATE,
    EMPLOYEE_SAVED,
    EMPLOYE_SAVE_START
  } from '../actions/types';

const INITIAL_STATE = {
  uid: '', name: '', phone: '', shift: '', loading: null
};

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case EMPLOYEE_UPDATE:
      return { ...state, [action.payload.prop]: action.payload.value };
    case EMPLOYEE_SAVED:
      return INITIAL_STATE;
    case EMPLOYE_SAVE_START:
      return { ...state, loading: true };
    default:
      return state;
  }
};
