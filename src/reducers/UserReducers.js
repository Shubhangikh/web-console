import AT from '../actions/ActionTypes';

const userDefaults = {
  email: '',
  firstName: '',
  lastName: ''
};

export const user = (state = userDefaults, action) => {
  switch (action.type) {
    case AT.SET_CURRENT_USER:
      return {
        ...state,
        email: action.payload.email,
        firstName: action.payload.firstName,
        lastName: action.payload.lastName
      };
    default:
      return state;
  }
};
