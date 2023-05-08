import { FC, useEffect } from 'react';
import { Button, Grid } from '@mui/material';
import { Link as RouterLink } from 'react-router-dom';

import { WeatherCardDetails } from 'components/WeatherCardDetails';
import { DailyWeatherChart } from 'components/DailyWeatherChart';

import { useWeatherDetailsState } from './WeatherDetails.state';
import { getCustomTooltipMarkup } from './helpers';

import './BarChartStyles.css';

import { ROUTES } from 'constants/routes';

const WeatherDetails: FC = () => {
  const {
    onFetchDailyForecastDataHandler,
    main,
    name,
    detailFields,
    sys,
    weather,
    chartData,
    colorConditionsRanges,
    weatherDate,
    isFetchDailyForecast,
    dailyForecastData,
    pathname,
  } = useWeatherDetailsState();

  useEffect(() => {
    onFetchDailyForecastDataHandler();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <Grid container spacing={3}>
      <Grid
        item
        xs={12}
        display="flex"
        justifyContent={{ xs: 'center', sm: 'flex-end' }}
      >
        <Button
          component={RouterLink}
          variant="contained"
          disabled={pathname === ROUTES.home}
          to={ROUTES.home}
        >
          To Home Page
        </Button>
      </Grid>
      <Grid item xs={12} md={6} justifyContent="center">
        <WeatherCardDetails
          detailsFields={detailFields}
          cityName={name}
          weatherDescription={weather[0].description}
          country={sys.country}
          icon={weather[0].icon}
          currentTemp={main.temp}
          weatherDate={weatherDate}
        />
      </Grid>

      <Grid item xs={12} md={6}>
        <DailyWeatherChart
          isLoading={isFetchDailyForecast}
          chartData={{
            ...chartData,
            options: {
              plotOptions: {
                bar: {
                  colors: {
                    ranges: colorConditionsRanges,
                  },
                },
              },
              tooltip: {
                custom: (options) => {
                  return getCustomTooltipMarkup({
                    main: dailyForecastData.list[options.dataPointIndex].main,
                  });
                },
              },
            },
          }}
        />
      </Grid>
    </Grid>
  );
};

export default WeatherDetails;
