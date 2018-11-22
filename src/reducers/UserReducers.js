import AT from '../actions/ActionTypes';

export const user = (state = { firstName: '', lastName: '' }, action) => {
  switch (action.type) {
    case AT.FETCH_USER_DETAILS_SUCCEEDED:
      return {
        ...state,
        firstName: action.payload.firstName,
        lastName: action.payload.lastName
      };
    default:
      return state;
  }
};
