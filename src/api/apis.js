import axios from 'axios';

// User
export const fetchUserDetails = () => {
  return axios.get('/items/message');
};
