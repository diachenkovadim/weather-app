import { FC } from 'react';

import { BrowserRouter, Route, Routes } from 'react-router-dom';

import { Home } from 'screens/Home';
import { WeatherDetails } from 'screens/WeatherDetails';
import { Page404 } from 'screens/Page404';

import { SuspenseComponent } from 'components/SuspenseComponent';
import { Layout } from 'components/Layout';

import { ROUTES } from 'constants/routes';

export const AppRpouter: FC = () => (
  <BrowserRouter>
    <Routes>
      <Route path={ROUTES.home} element={<Layout />}>
        <Route
          index
          element={
            <SuspenseComponent>
              <Home />
            </SuspenseComponent>
          }
        />
        <Route
          path={ROUTES.weatherDetails}
          element={
            <SuspenseComponent>
              <WeatherDetails />
            </SuspenseComponent>
          }
        />

        <Route
          path={ROUTES.page404}
          element={
            <SuspenseComponent>
              <Page404 />
            </SuspenseComponent>
          }
        />
      </Route>
    </Routes>
  </BrowserRouter>
);
