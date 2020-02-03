import axios from 'axios';

export const marvelAPIUrl = 'https://gateway.marvel.com:443/v1/public';
export const apiKey = 'b4f55cae9e47788b52ff355bffbc1fe1';

const marvelAPI = axios.create({
  baseURL: marvelAPIUrl,
  params: {
    apiKey,
  },
  timeout: 10000,
  responseType: 'json',
});

export default marvelAPI;
