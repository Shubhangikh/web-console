import { combineReducers } from 'redux';
import { user } from './UserReducers';

const reducers = combineReducers({
  user
});

export default reducers;
