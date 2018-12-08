import { api as client } from '../config/axiosConfig';
// User
export const submitUserLoginCredentials = credentials => {
  return client.post('/uaa/oauth/token', {
    params: {
      username: credentials.username,
      password: credentials.password,
      grant_type: 'password',
      scope: 'ui'
    }
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
  return client.get('/uaa/auth/current');
}
export const fetchLoginDetails = () => {
  return client.get('/profile/user');
};

export const fetchUserDetails = () => {
  return client.get('profile/user');
};
