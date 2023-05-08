import { Skeleton, Stack } from '@mui/material';
import { FC } from 'react';

export const WeatherCardSkeleton: FC = () => {
  return (
    <Stack spacing={2} data-testid="weather-card-skeleton">
      <Skeleton variant="rounded" sx={{ width: 1, height: 40 }} />
      <Skeleton variant="rounded" sx={{ width: 1, height: 120 }} />
    </Stack>
  );
};
