import {
  USER_INPUT,
  USER_AUTH,
  USER_UNAUTH,
  AUTH_ERROR,
  CLEAR_ERROR,
  REQUEST_PENDING,
  REQUEST_RESOLVED
} from './authActionTypes';
import history from '../history';

const loginUser = () => ({
  type: USER_AUTH
});

const logoutUser = () => ({
  type: USER_UNAUTH
});

const onError = error => ({
  type: AUTH_ERROR,
  payload: error
});

const clearError = () => ({
  type: CLEAR_ERROR
})

const setRequestToPending = () => ({
  type: REQUEST_PENDING
})

const setRequestToResolved = () => ({
  type: REQUEST_RESOLVED
})

export const updateLoginForm = payload => ({
  type: USER_INPUT,
  payload
});

export const login = (userId, redirectPath) => dispatch => {
  //Simulated authorization process
  console.log('Pass userId rather than use getState', userId)
  dispatch(setRequestToPending());
  dispatch(clearError());
  dispatch(updateLoginForm(''));
  
  new Promise((resolve, reject) => {
    if(true) {
      const authorized = true;
      setTimeout(() => resolve(authorized), 1000)
    } else {
      const err = new Error('Whoops');
      reject(err);
    }
  })
  .then(isAuth => {
    if(isAuth) {
      dispatch(loginUser());
      history.push(redirectPath);
    }
    dispatch(setRequestToResolved());
  })
  .catch(err => {
    dispatch(onError(err));
    dispatch(setRequestToResolved());
  })
};

export const logout = () => dispatch => dispatch(logoutUser);