import { FC } from 'react';
import { Stack, Typography } from '@mui/material';

import { HEADER_CONFIG } from 'constants/config';

export const EmptyScreen: FC = () => {
  return (
    <Stack
      justifyContent="center"
      alignItems="center"
      height={`calc(100vh - ${HEADER_CONFIG.H_MAIN}px)`}
      width={1}
    >
      <Typography variant="h6" textAlign="center">
        You do not have any weather cards. Please use the search at the top to
        find city
      </Typography>
    </Stack>
  );
};
