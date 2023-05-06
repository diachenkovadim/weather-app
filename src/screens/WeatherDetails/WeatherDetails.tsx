import { FC, useEffect } from 'react';
import { Container, Grid } from '@mui/material';

import { WeatherCardDetails } from 'components/WeatherCardDetails';
import { DailyWeatherChart } from 'components/DailyWeatherChart';

import { useWeatherDetailsState } from './WeatherDetails.state';
import { getCustomTooltipMarkup } from './helpers';

import './BarChartStyles.css';

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
    dailyForecastData,
  } = useWeatherDetailsState();

  useEffect(() => {
    onFetchDailyForecastDataHandler();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <Container>
      <Grid container spacing={3}>
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
    </Container>
  );
};

export default WeatherDetails;
