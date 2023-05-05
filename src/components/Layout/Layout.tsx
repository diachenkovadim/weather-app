import { FC } from 'react';
import { Outlet } from 'react-router-dom';
import { Box } from '@mui/material';

import { Header } from '../Header';

export const Layout: FC = () => {
  return (
    <Box
      sx={{
        display: 'flex',
        flexDirection: 'column',
        minHeight: { lg: 1 },
        height: '100%',
        mb: 3,
      }}
    >
      <Header />

      <Box component="main" sx={{ height: '100%', flexGrow: 1, mt: 1 }}>
        <Outlet />
      </Box>
    </Box>
  );
};
