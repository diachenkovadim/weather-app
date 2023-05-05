import { FC } from 'react';
import { Box, CardContent, Stack, Typography } from '@mui/material';
import RefreshRoundedIcon from '@mui/icons-material/RefreshRounded';
import DeleteForeverRoundedIcon from '@mui/icons-material/DeleteForeverRounded';

import { StyledCard } from 'styles/overrides/Card';

import { MainContent } from './MainContent';

interface IWeatherCardProps {
  cityName: string;
  currentTemperature: number;
  minTemperature: number;
  maxTemperature: number;
  icon: string;
  country: string;
  timeStamp: number;
  weatherDescription: string;
}
export const WeatherCard: FC<IWeatherCardProps> = (props) => {
  const {
    cityName,
    currentTemperature,
    country,
    timeStamp,
    icon,
    maxTemperature,
    minTemperature,
    weatherDescription,
  } = props;

  return (
    <StyledCard
      sx={{
        background: (theme) =>
          `linear-gradient(to right, ${theme.palette.success.lighter}, ${theme.palette.success.light})`,
      }}
    >
      <CardContent>
        <Stack direction="row" justifyContent="space-between" mb={1}>
          <Typography variant="h5">
            {cityName}, {country}
          </Typography>
          <Stack direction="row" spacing={1} alignItems="center">
            <Box component="span" display="flex">
              <RefreshRoundedIcon />
            </Box>
            <Box component="span" display="flex">
              <DeleteForeverRoundedIcon />
            </Box>
          </Stack>
        </Stack>

        <MainContent
          currentTemperature={currentTemperature}
          timeStamp={timeStamp}
          icon={icon}
          maxTemperature={maxTemperature}
          minTemperature={minTemperature}
          weatherDescription={weatherDescription}
        />
      </CardContent>
    </StyledCard>
  );
};
