import { api as client } from '../config/axiosConfig';

// User
export const submitUserLoginCredentials = credentials => {
  return client.post('/uaa/auth/token', {
    email: credentials.email,
    password: credentials.password
  });
};
export const signupUser = registerUserData => {
  return client.post('/uaa/auth/register', {
    firstName: registerUserData.firstName,
    lastName: registerUserData.lastName,
    email: registerUserData.email,
    password: registerUserData.password
  });
};
export function fetchCurrentUserDetails() {
  return client.get('/api/auth/v1/me');
}
export const fetchLoginDetails = () => {
  return client.get('/profile/user');
};

export const fetchUserDetails = () => {
  return client.get('profile/user');
};
