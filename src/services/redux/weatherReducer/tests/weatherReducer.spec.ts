import MockAdapter from 'axios-mock-adapter';

import { fetchDailyForecastData, fetchWeatherData } from '../weather.thunk';
import {
  initialState,
  removeError,
  removeWeatherCard,
  selectWeatherCard,
  weatherReducer,
} from '../weather.reducer';
import { GET_ENDPOINTS, instance } from '../../../apiService';
import { mockedDailyForecast, mockedData, payloadData } from './mockData';


const mock = new MockAdapter(instance);

const mockNetworkRequests = (
  endpoint: string = GET_ENDPOINTS.fetchCityWeather,
  errorCode: number = 200,
  data: unknown = mockedData
) => mock.onGet(endpoint).reply(errorCode, data);


const dispatch = jest.fn();
const getState = jest.fn();

describe('weather slice', () => {
  it('fetchWeatherData works well', async () => {
    mockNetworkRequests();

    const thunk = fetchWeatherData(payloadData);
    await thunk(dispatch, getState, undefined);

    const { calls } = dispatch.mock;
    const [start, end] = calls;

    expect(start[0].type).toBe(fetchWeatherData.pending.type);
    expect(end[0].type).toBe(fetchWeatherData.fulfilled.type);
    expect(end[0].payload).toStrictEqual(mockedData);
  });

  it('fetchDailyForecastData works well', async () => {
    mockNetworkRequests(GET_ENDPOINTS.forecast, 200, mockedDailyForecast);

    const thunk = fetchDailyForecastData('Kharkiv');
    await thunk(dispatch, getState, undefined);

    const { calls } = dispatch.mock;
    const [start, end] = calls;

    expect(start[0].type).toBe(fetchDailyForecastData.pending.type);
    expect(end[0].type).toBe(fetchDailyForecastData.fulfilled.type);
    expect(end[0].payload).toStrictEqual(mockedDailyForecast);
  });

  it('should remove a weather card', () => {
    const state = {
      ...initialState,
      weatherData: [mockedData],
    };
    const action = removeWeatherCard(999);

    expect(weatherReducer(state, action)).toEqual(initialState);
  });

  it('should select a weather card', () => {
    const state = {
      ...initialState,
      weatherData: [mockedData],
    };

    const action = selectWeatherCard(999);

    const expectedState = {
      ...state,
      selectedWeatherData: mockedData,
    };
    expect(weatherReducer(state, action)).toEqual(expectedState);
  });

  it('should remove error message', () => {
    const state = {
      ...initialState,
      isError: true,
      errorMessage: 'Failed to fetch weather data',
    };
    const action = removeError();

    expect(weatherReducer(state, action)).toEqual(initialState);
  });

  it('should change loading and error statuses', () => {
    const state = weatherReducer(initialState, fetchWeatherData.pending);
    expect(state.isLoading).toBe(true);
    expect(state.isError).toBe(false);
  });

  it('should add weather data when fetchWeatherData.fullfield', () => {
    const state = weatherReducer(
      initialState,
      fetchWeatherData.fulfilled(mockedData, '', payloadData)
    );
    expect(state).toEqual({
      ...initialState,
      weatherData: [mockedData],
    });
  });
});
