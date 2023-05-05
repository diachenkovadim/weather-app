export interface IWeatherCardProps {
  cityName: string;
  currentTemperature: number;
  minTemperature: number;
  maxTemperature: number;
  icon: string;
  country: string;
  timeStamp: number;
  weatherDescription: string;
}

export interface IMainContentProps
  extends Omit<IWeatherCardProps, 'cityName' | 'country'> {}
