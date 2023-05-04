import { FC, useEffect } from 'react';
import { Box, Button, Container, Grid } from '@mui/material';

import { WeatherCard } from 'components/WeatherCard';
import { ModalWindow } from 'components/ModalWindow';
// import axios from 'axios';
// const base_api_url = 'https://api.openweathermap.org/data/2.5/weather';
// const api_key = process.env.REACT_APP_OPEN_WEATHER_API_KEY;

const Home: FC = () => {
  // const onFeatchWeatehDatahandler = async () => {
  //   try {
  //     const response = await axios.get(base_api_url, {
  //       params: {
  //         q: 'Kiev',
  //         appid: api_key,
  //         units: 'metric',
  //       },
  //     });
  //     console.log(response);
  //   } catch (error) {
  //     console.log();
  //   }
  // };
  // useEffect(() => {
  //   onFeatchWeatehDatahandler();
  // }, []);
  return (
    <Box
      sx={{
        display: { lg: 'flex' },
        minHeight: { lg: 1 },
        height: '100%',
      }}
    >
      <Container>
        <Grid container>
          <div>Home</div>
          <WeatherCard />

          <ModalWindow open={false} onClose={() => {}}>
            <Button>Click me</Button>
          </ModalWindow>
        </Grid>
      </Container>
    </Box>
  );
};

export default Home;
