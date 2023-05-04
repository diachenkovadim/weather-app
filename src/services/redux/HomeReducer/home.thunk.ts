import { createAsyncThunk } from '@reduxjs/toolkit';

import { apiServices, GET_ENDPOINTS } from '../../apiService';
import { IWeatherApiResponse } from './home.types';

const api_key = process.env.REACT_APP_OPEN_WEATHER_API_KEY;

export const fetchWeatherData = createAsyncThunk<IWeatherApiResponse, string>(
  'home/fetchWeatherData',
  async (cityName) => {
    try {
      const { data } = await apiServices.fetchData(
        GET_ENDPOINTS.fetchCityWeather,
        {
          params: {
            q: cityName,
            appid: api_key,
            units: 'metric',
          },
        }
      );

      console.log(data);

      return data;
    } catch (error) {
      console.log();
    }
  }
);
