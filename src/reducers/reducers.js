import { combineReducers } from 'redux';
import { login } from './LoginReducer';
import { user } from './UserReducers';
import auth from './AuthReducers';
import { items } from './ItemReducers';
const reducers = combineReducers({
  login,
  user,
  auth,
  items
});

export default reducers;
