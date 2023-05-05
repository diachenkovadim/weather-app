import { FC } from 'react';
import { Link as RouterLink } from 'react-router-dom';
import { AppBar, Button, Toolbar } from '@mui/material';

import { useHeaderState } from './Header.state';

import { AddWeatherModalWindow } from '../ModalWindow/AddWeatherModalWindow';

import { ROUTES } from 'constants/routes';
import { HEADER_CONFIG } from 'constants/config';

export const Header: FC = () => {
  const { isOpenModalWindow, onToggleModalWindow } = useHeaderState();
  return (
    <AppBar position="static" color="inherit">
      <Toolbar
        sx={{
          justifyContent: 'space-between',
          height: {
            xs: HEADER_CONFIG.H_MOBILE,
            md: HEADER_CONFIG.H_MAIN,
          },
        }}
      >
        <Button component={RouterLink} variant="contained" to={ROUTES.home}>
          To Home Page
        </Button>
        <Button
          variant="contained"
          color="success"
          onClick={onToggleModalWindow}
        >
          Add weather card
        </Button>
      </Toolbar>

      <AddWeatherModalWindow
        isOpenModalWindow={isOpenModalWindow}
        onToggleModalWindow={onToggleModalWindow}
      />
    </AppBar>
  );
};
