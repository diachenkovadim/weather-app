import { FC } from 'react';
import { Outlet } from 'react-router-dom';
import { Header } from '../Header';
import { Stack } from '@mui/material';

export const Layout: FC = () => {
  return (
    <Stack spacing={3}>
      <Header />
      <Outlet />
    </Stack>
  );
};
