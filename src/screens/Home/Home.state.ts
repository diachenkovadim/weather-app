import { useAppDispatch, useAppSelector } from 'hooks/useRedux';

export const useHomeState = () => {
  const dispath = useAppDispatch();

  const onDeleteWeatherCardHandler = (
    event: React.MouseEvent<HTMLInputElement>
  ) => {};
  const { weatherData } = useAppSelector((state) => state.home);

  return { weatherData };
};
