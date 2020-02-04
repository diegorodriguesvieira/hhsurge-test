import axios from 'axios';

export const marvelAPIUrl = 'https://gateway.marvel.com/v1/public';
export const apiKey = 'b4f55cae9e47788b52ff355bffbc1fe1';

const marvelAPI = axios.create({
  baseURL: marvelAPIUrl,
  timeout: 10000,
  responseType: 'json',
});

marvelAPI.interceptors.request.use(config => {
  return { ...config, params: { ...config.params, apikey: apiKey } };
});

export default marvelAPI;
