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
  lat: number;
  lon: number;
}

export interface IMainContentProps
  extends Omit<
    IWeatherCardProps,
    'cityName' | 'lat' | 'lon' | 'country' | 'cardId'
  > {}

export interface IuseWeatherCardStateProps
  extends Pick<IWeatherCardProps, 'lat' | 'lon' | 'cardId'> {}
