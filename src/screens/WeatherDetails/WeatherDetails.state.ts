import { useMemo } from 'react';
import { useTheme } from '@mui/material';
import { useLocation } from 'react-router-dom';

import { useAppDispatch, useAppSelector } from 'hooks/useRedux';
import { fetchDailyForecastData } from 'services/redux/weatherReducer';
import { fDate } from 'utils/formatDate';

import { getColorCondtions, getDetailsFields } from './helpers';
import { IChartData } from './WeatherDetails.types';

export const useWeatherDetailsState = () => {
  const dispatch = useAppDispatch();
  const { pathname } = useLocation();
  const theme = useTheme();

  const { selectedWeatherData, dailyForecastData, isFetchDailyForecast } =
    useAppSelector((state) => state.weather);
  const { name, sys, weather, main, wind, dt } = selectedWeatherData;

  const onFetchDailyForecastDataHandler = () =>
    dispatch(fetchDailyForecastData(name));

  const chartData = dailyForecastData?.list?.reduce(
    (acc: IChartData, item) => {
      const time = item.dt_txt.split(' ')[1];
      acc.categories.push(time);
      acc.series.push(item.main.temp);
      return acc;
    },

    { categories: [], series: [] }
  );

  // eslint-disable-next-line react-hooks/exhaustive-deps
  const colorConditionsRanges = useMemo(() => getColorCondtions(theme), []);
  const detailFields = getDetailsFields({
    main,
    wind,
  });

  const weatherDate = fDate(dt * 1000);
  return {
    onFetchDailyForecastDataHandler,
    pathname,
    colorConditionsRanges,
    isFetchDailyForecast,
    chartData,
    main,
    name,
    detailFields,
    sys,
    weather,
    dailyForecastData,
    weatherDate,
  };
};
