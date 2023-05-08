export const mockedData = {
  coord: { lon: 10, lat: 10 },
  weather: [{ id: 1, main: 'Clouds', description: 'few clouds', icon: '02n' }],
  base: 'stations',
  main: {
    temp: 30,
    feels_like: 30,
    temp_min: 30,
    temp_max: 30,
    pressure: 1000,
    humidity: 8,
    sea_level: 1000,
    grnd_level: 1000,
  },
  visibility: 10000,
  wind: { speed: 10, deg: 10, gust: 10 },
  clouds: { all: 10 },
  dt: 1683482102,
  sys: { country: 'UA', sunrise: 99999, sunset: 99999 },
  timezone: 3600,
  id: 999,
  name: 'Kharkiv',
  cod: 200,
};

export const mockedDailyForecast = {
  list: [
    {
      dt: 1,
      main: {
        temp: 30,
        feels_like: 30,
        temp_min: 30,
        temp_max: 30,
        pressure: 1000,
        humidity: 8,
        sea_level: 1000,
        grnd_level: 1000,
      },
      weather: [
        { id: 1, main: 'Clouds', description: 'few clouds', icon: '02n' },
      ],
      wind: { speed: 10, deg: 10, gust: 10 },
      clouds: { all: 10 },
      visibility: 1,
      pop: 1,
      rain: {
        rain: 1,
      },
      sys: {
        pod: '',
      },
      dt_txt: '2023-10-01 21:00',
    },
  ],
  city: {
    id: 1,
    name: 'City',
    coord: { lon: 10, lat: 10 },
    country: 'UA',
    population: 1000,
    timezone: 1,
    sunrise: 1,
    sunset: 1,
  },
  cnt: 100,
  name: 'Kharkiv',
  cod: 200,
};

export const payloadData = { lon: 10, lat: 20 };
