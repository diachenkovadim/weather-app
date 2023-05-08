interface IWeather {
  id: number;
  main: string;
  description: string;
  icon: string;
}
interface IWind {
  speed: number;
  deg: number;
  gust?: number;
}

interface IMain {
  temp: number;
  feels_like: number;
  pressure: number;
  humidity: number;
  temp_min: number;
  temp_max: number;
  sea_level?: number;
  grnd_level?: number;
}

interface ICoord {
  lon: number;
  lat: number;
}

export interface IDayliForecastApiResponse {
  cod: string;
  message: number;
  cnt: number;
  city: {
    id: number;
    name: string;
    coord: ICoord;
    country: string;
    population: number;
    timezone: number;
    sunrise: number;
    sunset: number;
  };

  list: {
    dt: number;

    main: IMain & {
      temp_kf?: number;
    };
    weather: IWeather[];
    clouds: {
      all: number;
    };
    wind: IWind;
    visibility: number;
    pop: number;
    rain?: {
      [key: string]: number;
    };
    sys: {
      pod: string;
    };
    dt_txt: string;
  }[];
}

export interface IWeatherApiResponse {
  base: string;
  clouds: {
    all: number;
  };
  cod: number;
  coord: ICoord;
  dt: number;
  id: number;
  name: string;
  main: IMain;
  sys: {
    type?: number;
    id?: number;
    message?: number;
    country: string;
    sunrise: number;
    sunset: number;
  };
  visibility?: number;
  timezone?: number;
  weather: IWeather[];
  wind: IWind;
}

export interface IHOME_INITIAL_STATE {
  weatherData: IWeatherApiResponse[];
  selectedWeatherData: IWeatherApiResponse;
  dailyForecastData: IDayliForecastApiResponse;
  isLoading: boolean;
  isFetchDailyForecast: boolean;
  isError: boolean;
  errorMessage: string;
}
