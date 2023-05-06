import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import {
  fetchWeatherData,
  removeWeatherCard,
  selectWeatherCard,
} from 'services/redux/weatherReducer';
import { useAppDispatch, useAppSelector } from 'hooks/useRedux';

import { IuseWeatherCardStateProps } from './weatherCard.types';

import { WEATHER_DETAILS } from 'constants/routes';

export const useWeatherCardState = (props: IuseWeatherCardStateProps) => {
  const { cityName, cardId } = props;

  const navigate = useNavigate();
  const dispatch = useAppDispatch();
  const {
    isError,
    weatherData,
    isLoading: tt,
  } = useAppSelector((state) => state.weather);
  const [isLoading, setIsLoading] = useState(false);
  console.log(tt);

  const onDeleteWeatherCardHandler = () =>
    cardId && dispatch(removeWeatherCard(cardId));

  const onRefreshWeatherCardDataHandler = async () => {
    setIsLoading(true);
    await dispatch(fetchWeatherData(cityName));
    setIsLoading(false);
  };

  const onCardClickHandler = () => {
    // const selectedWeatherItem = weatherData.find((item) => item.id === cardId);
    // selectedWeatherItem &&
    dispatch(selectWeatherCard(cardId));
    // console.log(selectedWeatherItem, 'selectedWeatherItem');

    navigate(`${WEATHER_DETAILS}${cardId}`);
  };

  return {
    onDeleteWeatherCardHandler,
    onRefreshWeatherCardDataHandler,
    onCardClickHandler,
    isError,
    isLoading,
    tt
  };
};
