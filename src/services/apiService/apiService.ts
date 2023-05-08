import axios from 'axios';

import { GET_ENDPOINTS } from './endpoints';

const fetchCityGeoDataOptions = {
  method: 'GET',
  url: `${process.env.REACT_APP_BASE_GEO_API_URL}${GET_ENDPOINTS.fetchGeoDataByCityName}`,
};

export const instance = axios.create({
  baseURL: process.env.REACT_APP_BASE_API_URL,
  timeout: 50000,
});

export const apiServices = {
  fetchData: async (requestUrl: string, params?: {}) => {
    return instance.get(`${requestUrl}`, { params });
  },

  fetchCityGeoData: async (params: { q: string; limit?: number }) => {
    return axios.request({
      ...fetchCityGeoDataOptions,
      params: { ...params, appid: process.env.REACT_APP_OPEN_WEATHER_API_KEY },
    });
  },
};
