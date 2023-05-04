import { FC } from 'react';
import { Link } from 'react-router-dom';
import { AppBar, Box, Button, Toolbar } from '@mui/material';

import { ModalWindow } from '../ModalWindow';
import { useHeaderState } from './Header.state';

import { ROUTES } from 'constants/routes';

export const Header: FC = () => {
  const { isOpenModalWindow, onToggleModalWindow } = useHeaderState();
  return (
    <AppBar
      position="static"
      sx={{ backgroundColor: (theme) => theme.palette.info.main }}
    >
      <Toolbar sx={{ justifyContent: 'space-between' }}>
        <Box
          component={Link}
          to={ROUTES.home}
          sx={{
            p: '6px 16px',
            backgroundColor: (theme) => theme.palette.grey[700],
            color: (theme) => theme.palette.common.white,
            borderRadius: 1,
            textDecoration: 'none',
          }}
        >
          Home Page
        </Box>
        <Button variant="contained">Add weather card</Button>
      </Toolbar>

      <ModalWindow open={isOpenModalWindow} onClose={onToggleModalWindow}>
        <Button>Click me</Button>
      </ModalWindow>
    </AppBar>
  );
};
