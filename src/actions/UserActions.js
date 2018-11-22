import AT from './ActionTypes';
import * as api from '../api/apis';

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
