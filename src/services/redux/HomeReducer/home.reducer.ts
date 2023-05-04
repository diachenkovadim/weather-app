import { createSlice, PayloadAction } from '@reduxjs/toolkit';

import { IHOME_INITIAL_STATE } from './home.types';
import { fetchWeatherData } from './home.thunk';

const initialState: IHOME_INITIAL_STATE = {
  weatherData: [],
  isLoading: false,
  isError: false,
  errorMessage: '',
};

export const homeSlice = createSlice({
  name: 'homeSlice',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchWeatherData.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(fetchWeatherData.fulfilled, (state, action) => {
        state.isLoading = false;
        state.weatherData = [...state.weatherData, action.payload];
      })
      .addCase(fetchWeatherData.rejected, (state, action) => {
        state.isLoading = false;
        state.isError = true;
        state.errorMessage =
          action.error.message || 'Failed to fetch weather data';
      });
  },
});

// export const {} = homeSlice.actions;

export const homeReducer = homeSlice.reducer;
