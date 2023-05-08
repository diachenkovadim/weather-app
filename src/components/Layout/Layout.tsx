import { FC } from 'react';
import { Outlet } from 'react-router-dom';
import { Box, Container } from '@mui/material';

import { Header } from '../Header';

export const Layout: FC = () => {
  return (
    <Container>
      <Header />
      <Box component="main" sx={{ flexGrow: 1, py: 3 }}>
        <Outlet />
      </Box>
    </Container>
  );
};
