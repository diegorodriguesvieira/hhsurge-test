import axios from 'axios';

export const login = () => {
  return axios.get('users.json');
};

export default login;
