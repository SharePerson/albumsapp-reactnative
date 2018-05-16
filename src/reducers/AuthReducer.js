import {
  EMAIL_CHANGED,
  PASSWORD_CHANGED,
  LOGIN_USER_SUCCESS,
  LOGIN_USER_FAIL,
  LOGIN_START
} from '../actions/types';

const INITIAL_STATE = { email: '', password: '', error: '', loading: null, user: null };

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case EMAIL_CHANGED:
    return { ...state, email: action.payload, error: '', loading: null };
    case PASSWORD_CHANGED:
    return { ...state, password: action.payload, error: '', loading: null };
    case LOGIN_START:
    return { ...state, loading: true, error: '' };
    case LOGIN_USER_SUCCESS:
    return { ...state, user: action.payload, loading: false, email: '', password: '' };
    case LOGIN_USER_FAIL:
    return { ...state, error: 'Authentication Failed!', password: '', loading: false };
    default:
      return state;
  }
};
