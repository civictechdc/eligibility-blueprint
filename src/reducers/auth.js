import {
  USER_INPUT,
  USER_AUTH,
  USER_UNAUTH,
  AUTH_ERROR,
  CLEAR_ERROR,
  REQUEST_PENDING,
  REQUEST_RESOLVED
} from '../actions/authActionTypes';

const initialState = {
  userInput: '',
  isAuthenticated: false,
  error: null,
  isPending: false
};

const auth = (state = initialState, action) => {
  switch(action.type) {
    case USER_INPUT:
      return {
        ...state,
        userInput: action.payload
      }
    case USER_AUTH:
      return {
        ...state,
        isAuthenticated: true
      }
    case USER_UNAUTH:
      return {
        ...state,
        isAuthenticated: false
      }
    case AUTH_ERROR:
      return {
        ...state,
        error: action.payload
      }
    case CLEAR_ERROR:
      return {
        ...state,
        error: null
      }
    case REQUEST_PENDING:
      return {
        ...state,
        isPending: true
      }
    case REQUEST_RESOLVED:
      return {
        ...state,
        isPending: false
      }
    default: 
      return state;
  }
}

export default auth;