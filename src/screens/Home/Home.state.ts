import { useAppSelector } from 'hooks/useRedux';

export const useHomeState = () => {
  const weatherData = useAppSelector((state) => state.weather.weatherData);

  return { weatherData };
};
