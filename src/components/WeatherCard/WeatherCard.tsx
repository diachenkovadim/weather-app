import { FC } from 'react';
import { Card, CardHeader, Stack, Typography } from '@mui/material';

export const WeatherCard: FC = () => {
  return (
    <Card>
      <CardHeader title="Kharkiv" />
      <Stack>
        <Typography variant="body2">Hello</Typography>
      </Stack>
    </Card>
  );
};
