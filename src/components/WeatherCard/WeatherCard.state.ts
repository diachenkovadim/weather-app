import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

import {
  fetchWeatherData,
  removeWeatherCard,
  selectWeatherCard,
} from 'services/redux/weatherReducer';
import { useAppDispatch } from 'hooks/useRedux';

import { IuseWeatherCardStateProps } from './weatherCard.types';

import { WEATHER_DETAILS } from 'constants/routes';

export const useWeatherCardState = (props: IuseWeatherCardStateProps) => {
  const { lat, lon, cardId } = props;

  const navigate = useNavigate();
  const dispatch = useAppDispatch();
  const [isLoading, setIsLoading] = useState(false);

  const onDeleteWeatherCardHandler = (
    event: React.MouseEvent<HTMLSpanElement>
  ) => {
    event.stopPropagation();
    cardId && dispatch(removeWeatherCard(cardId));
  };

  const onRefreshWeatherCardDataHandler = async (
    event: React.MouseEvent<HTMLSpanElement>
  ) => {
    try {
      event.stopPropagation();
      setIsLoading(true);
      await dispatch(fetchWeatherData({ lat, lon }));
      setIsLoading(false);
    } catch (error) {
      setIsLoading(false);
    }
  };

  const onCardClickHandler = () => {
    dispatch(selectWeatherCard(cardId));
    navigate(`${WEATHER_DETAILS}${cardId}`);
  };

  return {
    onDeleteWeatherCardHandler,
    onRefreshWeatherCardDataHandler,
    onCardClickHandler,
    isLoading,
  };
};
