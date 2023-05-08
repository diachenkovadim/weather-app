import { createAsyncThunk } from '@reduxjs/toolkit';

import { GET_ENDPOINTS, apiServices } from '../../apiService';
import {
  IDayliForecastApiResponse,
  IWeatherApiResponse,
} from './weather.types';

const api_key = process.env.REACT_APP_OPEN_WEATHER_API_KEY;
export const baseAPIconfig = {
  appid: api_key,
  units: 'metric',
};

export const fetchWeatherData = createAsyncThunk<
  IWeatherApiResponse,
  { lat: number; lon: number }
>('weather/fetchWeatherData', async ({ lat, lon }) => {
  try {
    const { data } = await apiServices.fetchData(
      GET_ENDPOINTS.fetchCityWeather,
      {
        lat,
        lon,
        ...baseAPIconfig,
      }
    );

    return data;
  } catch (error) {
    console.log();
  }
});

export const fetchDailyForecastData = createAsyncThunk<
  IDayliForecastApiResponse,
  string
>('dailyForecast/fetchDailyForecastData', async (cityName) => {
  try {
    const { data } = await apiServices.fetchData(GET_ENDPOINTS.forecast, {
      q: cityName,
      ...baseAPIconfig,
    });

    return data;
  } catch (error) {
    console.log();
  }
});
