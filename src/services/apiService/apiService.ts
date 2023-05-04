import axios from 'axios';

const instance = axios.create({
  baseURL: process.env.REACT_APP_BASE_API_URL,
  timeout: 50000,
});

export const apiServices = {
  fetchData: async (requestUrl: string, params?: {}) => {
    return instance.get(`${requestUrl}`, { params });
  },
};
