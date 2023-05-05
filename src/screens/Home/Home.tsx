import { FC } from 'react';
import { Container, Grid } from '@mui/material';

import { WeatherCard } from 'components/WeatherCard';
import { EmptyScreen } from 'components/EmptyScreen';
import { useHomeState } from './Home.state';

const Home: FC = () => {
  const { weatherData } = useHomeState();
  return (
    <Container>
      <Grid container spacing={2}>
        {weatherData.map((weather, index) => (
          <Grid item key={weather.id} xs={12} md={6} lg={4}>
            <WeatherCard
              key={weather.id}
              cityName={weather.name}
              currentTemperature={weather.main.temp}
              minTemperature={weather.main.temp_min}
              maxTemperature={weather.main.temp_max}
              icon={weather.weather[0].icon}
              weatherDescription={weather.weather[0].description}
              country={weather.sys.country}
              timeStamp={weather.dt}
            />
          </Grid>
        ))}
        {!weatherData.length && <EmptyScreen />}
      </Grid>
    </Container>
  );
};

export default Home;
