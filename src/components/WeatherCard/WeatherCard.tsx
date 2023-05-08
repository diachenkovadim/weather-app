import { FC } from 'react';
import { CardContent, Stack, Typography } from '@mui/material';
import RefreshRoundedIcon from '@mui/icons-material/RefreshRounded';
import DeleteForeverRoundedIcon from '@mui/icons-material/DeleteForeverRounded';

import { StyledCard } from 'styles/overrides/Card';

import { MainContent } from './MainContent';
import { IWeatherCardProps } from './weatherCard.types';
import { useWeatherCardState } from './WeatherCard.state';
import { WeatherCardSkeleton } from '../Skeleton';
import { WeatherCardStyles as Styled } from './WeatherCard.styles';

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
    cardId,
    lat,
    lon,
  } = props;

  const {
    isLoading,
    onCardClickHandler,
    onDeleteWeatherCardHandler,
    onRefreshWeatherCardDataHandler,
  } = useWeatherCardState({ lat, lon, cardId });
  return (
    <StyledCard
      sx={{
        background: (theme) =>
          `linear-gradient(to right, ${theme.palette.success.lighter}, ${theme.palette.success.light})`,
      }}
      onClick={onCardClickHandler}
      data-testid="weather-card"
    >
      <CardContent>
        {isLoading ? (
          <WeatherCardSkeleton />
        ) : (
          <>
            <Stack direction="row" justifyContent="space-between" mb={1}>
              <Typography variant="h5">
                {cityName}, {country}
              </Typography>
              <Stack direction="row" spacing={1} alignItems="center">
                <Styled.StyledBox
                  component="span"
                  data-testid="refresh-button"
                  onClick={onRefreshWeatherCardDataHandler}
                >
                  <RefreshRoundedIcon />
                </Styled.StyledBox>
                <Styled.StyledBox
                  data-testid="remove-button"
                  onClick={onDeleteWeatherCardHandler}
                >
                  <DeleteForeverRoundedIcon />
                </Styled.StyledBox>
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
          </>
        )}
      </CardContent>
    </StyledCard>
  );
};
