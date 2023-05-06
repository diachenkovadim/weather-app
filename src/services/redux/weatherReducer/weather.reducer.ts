import { PayloadAction, createSlice } from '@reduxjs/toolkit';

import {
  IHOME_INITIAL_STATE,
  IWeatherApiResponse,
  IDayliForecastApiResponse,
} from './weather.types';
import { fetchDailyForecastData, fetchWeatherData } from './weather.thunk';
import { isToday } from 'date-fns';

const initialState: IHOME_INITIAL_STATE = {
  weatherData: [],
  selectedWeatherData: {} as IWeatherApiResponse,
  dailyForecastData: {} as IDayliForecastApiResponse,
  isLoading: false,
  isError: false,
  errorMessage: '',
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
          : state.weatherData.push(action.payload);
      })
      .addCase(fetchWeatherData.rejected, (state, action) => {
        state.isLoading = false;
        state.isError = true;
        state.errorMessage =
          action.error.message || 'Failed to fetch weather data';
      })
      .addCase(fetchDailyForecastData.fulfilled, (state, action) => {
        const todayListData = action.payload.list.filter((item) => {
          return isToday(new Date(item.dt_txt));
        });

        state.dailyForecastData = { ...action.payload, list: todayListData };
      });
  },
});

export const { removeWeatherCard, selectWeatherCard } = weatherSlice.actions;

export const weatherReducer = weatherSlice.reducer;
