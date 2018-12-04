import AT from './ActionTypes';
import * as api from '../api/apis';

export const loginUser = credentials => dispatch => {
  return api.submitUserLoginCredentials(credentials).then(() => {
    dispatch(fetchAndSetCurrentUser());
  });
};

export const registerUser = (
  registerUserData,
  successCallback,
  errorCallback
) => {
  return api
    .signupUser(registerUserData)
    .then(() => {
      successCallback();
    })
    .catch(error => {
      errorCallback(error);
    });
};

export const fetchAndSetCurrentUser = () => dispatch => {
  return new Promise(resolve => {
    return api.fetchCurrentUserDetails().then(({ data }) => {
      dispatch({
        type: AT.SET_CURRENT_USER,
        payload: data
      });
      return resolve(data);
    });
  });
};

export const fetchUserDetails = () => {
  return dispatch => {
    return api
      .fetchUserDetails()
      .then(response => {
        console.log('response: ', response);
        dispatch({
          type: AT.FETCH_USER_DETAILS_SUCCEEDED,
          payload: response.data
        });
      })
      .catch(error => {
        console.log('Request failed', error);
      });
  };
};

export const setUserDetails = payload => {
  return {
    type: AT.SET_USER_DETAILS,
    payload
  };
};

export const logout = () => {
  return {
    type: AT.USER_LOGOUT
  };
};
