import { api as client } from '../config/axiosConfig';
import 'url-search-params-polyfill';

// User
export const submitUserLoginCredentials = credentials => {
  const formData = new URLSearchParams();
  formData.append('grant_type', 'password');
  formData.append('username', credentials.username);
  formData.append('password', credentials.password);
  formData.append('scope', 'ui');

  return client.post('/uaa/oauth/token', formData.toString());
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
  return client.get('/accounts/current');
}
export const fetchLoginDetails = () => {
  return client.get('/profile/user');
};

export const fetchUserDetails = () => {
  return client.get('profile/user');
};
