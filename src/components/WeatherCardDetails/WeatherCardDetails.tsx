import { FC } from 'react';

import { CardContent, Stack, Typography } from '@mui/material';

import { TWeatherDetailsFields } from 'screens/WeatherDetails';
import { StyledCard } from 'styles/overrides/Card';
import { roundNumber } from 'utils/formatNumber';

import { ImageBox } from '../ImageBox';

interface IWeatherCardDetailsProps {
  detailsFields: TWeatherDetailsFields;
  cityName: string;
  weatherDescription: string;
  country: string;
  icon: string;
  currentTemp: number;
  weatherDate: string;
}
export const WeatherCardDetails: FC<IWeatherCardDetailsProps> = (props) => {
  const {
    detailsFields,
    country,
    cityName,
    currentTemp,
    weatherDescription,
    icon,
    weatherDate,
  } = props;

  return (
    <StyledCard direction="bottom">
      <CardContent>
        <Stack spacing={2}>
          <Stack direction="row" spacing={1} justifyContent="space-between">
            <Stack spacing={1}>
              <Typography variant="h5">
                {cityName}, {country}
              </Typography>
              <Typography variant="body2" textTransform="capitalize">
                {weatherDate}
              </Typography>
              <Typography variant="body2" textTransform="capitalize">
                {weatherDescription}
              </Typography>
            </Stack>
            <ImageBox imagePath={icon} width={120} />
          </Stack>

          <Stack direction={{ xs: 'column', sm: 'row' }} alignItems="center">
            <Typography
              variant="h3"
              sx={{ display: 'flex', width: 1, justifyContent: 'center' }}
            >
              {roundNumber(currentTemp)} °C
            </Typography>
            <Stack spacing={1} width={1}>
              <Typography variant="subtitle2">Details</Typography>
              {detailsFields.map((item) => (
                <Stack
                  key={item.fieldName}
                  direction="row"
                  justifyContent="space-between"
                >
                  <Typography variant="body2">{item.fieldName}</Typography>
                  <Typography variant="subtitle1">{item.value}</Typography>
                </Stack>
              ))}
            </Stack>
          </Stack>
        </Stack>
      </CardContent>
    </StyledCard>
  );
};
