export const WEATHER_DETAILS = '/weather-details/' as const;

export const ROUTES = {
  home: '/',
  weatherDetails: `${WEATHER_DETAILS}:id`,
  page404: '*',
} as const;
