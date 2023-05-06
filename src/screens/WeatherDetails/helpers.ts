import { Theme } from '@mui/material';

import { IWeatherApiResponse } from 'services/redux/weatherReducer';
import { roundNumber } from 'utils/formatNumber';

export const getDetailsFields = (
  data: Pick<IWeatherApiResponse, 'main' | 'wind'>
) => {
  const { feels_like, pressure, humidity, temp_max, temp_min } = data.main;
  const { speed } = data.wind;
  return [
    {
      fieldName: 'Feel Like',
      value: `${roundNumber(feels_like)} °C`,
    },
    {
      fieldName: 'Wind',
      value: `${speed} m/s`,
    },

    {
      fieldName: 'Humidity',
      value: `${humidity} %`,
    },
    {
      fieldName: 'Pressure',
      value: `${pressure} hPa`,
    },
    {
      fieldName: 'Max. Temperature',
      value: `${roundNumber(temp_max)} °C`,
    },
    {
      fieldName: 'Min. Temperature',
      value: `${roundNumber(temp_min)} °C`,
    },
  ];
};

export const getColorCondtions = (theme: Theme) => [
  {
    from: 0,
    to: 10,
    color: theme.palette.warning.lighter,
  },
  {
    from: 11,
    to: 20,
    color: theme.palette.primary.main,
  },
  {
    from: 21,
    to: 100,
    color: theme.palette.warning.main,
  },
  {
    from: -10,
    to: -1,
    color: theme.palette.secondary.main,
  },
  {
    from: -20,
    to: -11,
    color: theme.palette.secondary.dark,
  },
  {
    from: -100,
    to: -21,
    color: theme.palette.secondary.darker,
  },
];

export const getCustomTooltipMarkup = (
  data: Pick<IWeatherApiResponse, 'main'>
) => {
  const { main } = data;
  return `<div class="tooltipWrapper">
            <div class="rowWrapper">
              <div>Curr. Temp: </div>
              <div>${roundNumber(main.temp)}°C</div>
            </div> 
            <div class="rowWrapper">
              <div>Max. Temp: </div>
              <div>${roundNumber(main.temp_max)}°C</div>
            </div>
            <div class="rowWrapper">
            <div>Min. Temp: </div>
            <div>${roundNumber(main.temp_min)}°C</div>
            </div>
          </div>`;
};
