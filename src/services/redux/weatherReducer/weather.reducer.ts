import { PayloadAction, createSlice } from '@reduxjs/toolkit';

import {
  IHOME_INITIAL_STATE,
  IWeatherApiResponse,
  IDayliForecastApiResponse,
} from './weather.types';
import { fetchDailyForecastData, fetchWeatherData } from './weather.thunk';
import { isToday } from 'date-fns';

export const initialState: IHOME_INITIAL_STATE = {
  weatherData: [],
  selectedWeatherData: {} as IWeatherApiResponse,
  dailyForecastData: {} as IDayliForecastApiResponse,
  isLoading: false,
  isError: false,
  errorMessage: '',
  isFetchDailyForecast: false,
};

export const weatherSlice = createSlice({
  name: 'weatherSlice',
  initialState,
  reducers: {
    selectWeatherCard: (
      state: IHOME_INITIAL_STATE,
      action: PayloadAction<number>
    ) => {
      const selectedWeatherItem = state.weatherData.find(
        (item) => item.id === action.payload
      );
      if (selectedWeatherItem) {
        state.selectedWeatherData = selectedWeatherItem;
      }
    },
    removeWeatherCard: (
      state: IHOME_INITIAL_STATE,
      action: PayloadAction<number>
    ) => {
      state.weatherData = state.weatherData.filter(
        (weather) => weather.id !== action.payload
      );
    },
    removeError: (state: IHOME_INITIAL_STATE) => {
      state.isError = false;
      state.errorMessage = '';
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchWeatherData.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(fetchWeatherData.fulfilled, (state, action) => {
        state.isLoading = false;
        const existingIndex = state.weatherData.findIndex(
          (weather) => weather.id === action.payload.id
        );
        existingIndex !== -1
          ? (state.weatherData[existingIndex] = action.payload)
          : state.weatherData.unshift(action.payload);
      })
      .addCase(fetchWeatherData.rejected, (state, action) => {
        state.isLoading = false;
        state.isError = true;
        state.errorMessage =
          action.error.message || 'Failed to fetch weather data';
      })
      .addCase(fetchDailyForecastData.pending, (state) => {
        state.isFetchDailyForecast = true;
      })
      .addCase(fetchDailyForecastData.fulfilled, (state, action) => {
        const todayListData = action.payload.list.filter((item) => {
          return isToday(new Date(item.dt_txt));
        });
        state.dailyForecastData = { ...action.payload, list: todayListData };
        state.isFetchDailyForecast = false;
      })
      .addCase(fetchDailyForecastData.rejected, (state, action) => {
        state.isFetchDailyForecast = false;
        state.isError = true;
        state.errorMessage =
          action.error.message || 'Failed to fetch daily forecast data';
      });
  },
});

export const { removeWeatherCard, selectWeatherCard, removeError } =
  weatherSlice.actions;

export const weatherReducer = weatherSlice.reducer;
