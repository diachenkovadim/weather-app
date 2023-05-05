import { FC } from 'react';
import { Stack, Typography } from '@mui/material';

import { roundNumber } from 'utils/formatNumber';
import { fDate } from 'utils/formatDate';

import { IMainContentProps } from './weatherCard.types';
import { ImageBox } from '../ImageBox';

export const MainContent: FC<IMainContentProps> = (props) => {
  const {
    currentTemperature,
    icon,
    maxTemperature,
    minTemperature,
    weatherDescription,
    timeStamp,
  } = props;

  const date = fDate(timeStamp * 1000);
  return (
    <Stack
      direction={{ xs: 'column-reverse', sm: 'row' }}
      spacing={1}
      justifyContent="space-between"
    >
      <Stack spacing={1}>
        <Stack direction="row" spacing={1} justifyContent="space-between">
          <Typography variant="body2">Date:</Typography>
          <Typography variant="subtitle2">{date}</Typography>
        </Stack>
        <Stack direction="row" spacing={1} justifyContent="space-between">
          <Typography variant="body2">Current Temperature:</Typography>
          <Typography variant="subtitle2">
            {roundNumber(currentTemperature)} °C
          </Typography>
        </Stack>

        <Stack direction="row" spacing={1} justifyContent="space-between">
          <Typography variant="body2"> Min. Temperature:</Typography>
          <Typography variant="subtitle2">
            {roundNumber(minTemperature)} °C
          </Typography>
        </Stack>

        <Stack direction="row" spacing={1} justifyContent="space-between">
          <Typography variant="body2"> Max. Temperature:</Typography>
          <Typography variant="subtitle2">
            {roundNumber(maxTemperature)} °C
          </Typography>
        </Stack>
      </Stack>

      <Stack alignItems="center">
        <Typography
          variant="subtitle2"
          textTransform="capitalize"
          textAlign="center"
        >
          {weatherDescription}
        </Typography>
        <ImageBox imagePath={icon} width={100} height={100} />
      </Stack>
    </Stack>
  );
};
