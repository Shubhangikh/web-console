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
export const signupUser = registerData => {
  return client
    .post('/accounts/', registerData)
    .catch(error => console.log('Error creating an account', error));
};
export function fetchCurrentUserDetails() {
  return client.get('/accounts/current');
}

export function updateCurrentUserDetails(account) {
  return client.put('/accounts/current', account);
}

export function createItem(data) {
  const config = { headers: { 'Content-Type': false } };
  return client.post('/items/item', data, config);
}

export function fetchAllItems(username, pageIndex, pageSize) {
  return client.get(
    `/items/page/${username}?page=${pageIndex}&size=${pageSize}`
  );
}

export function editItem(item) {
  return client.put(`/items/item/${item.itemId}`, item);
}

export function deleteItem(itemId) {
  return client.delete(`/items/item/${itemId}`);
}

export function getImage(imageSrc) {
  return client.get(imageSrc, {
    responseType: 'arraybuffer'
  });
}
