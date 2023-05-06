export interface IWeatherCardProps {
  cityName: string;
  currentTemperature: number;
  minTemperature: number;
  maxTemperature: number;
  icon: string;
  country: string;
  timeStamp: number;
  weatherDescription: string;
  cardId: number;
}

export interface IMainContentProps
  extends Omit<IWeatherCardProps, 'cityName' | 'country' | 'cardId'> {}

export interface IuseWeatherCardStateProps
  extends Pick<IWeatherCardProps, 'cityName' | 'cardId'> {}
