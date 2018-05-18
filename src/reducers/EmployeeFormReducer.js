import
  {
    EMPLOYEE_UPDATE,
    EMPLOYEE_SAVED,
    EMPLOYEE_SAVE_START,
    EMPLOYEE_DELETE_START,
    EMPLOYEE_DELETED
  } from '../actions/types';

const INITIAL_STATE = {
  uid: '', name: '', phone: '', shift: '', loading: null
};

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case EMPLOYEE_UPDATE:
      return { ...state, [action.payload.prop]: action.payload.value };
    case EMPLOYEE_DELETED:
    case EMPLOYEE_SAVED:
      return INITIAL_STATE;
    case EMPLOYEE_SAVE_START:
    case EMPLOYEE_DELETE_START:
      return { ...state, loading: true };
    default:
      return state;
  }
};
