import { FC } from 'react';

import { LinearProgress } from '@mui/material';

import { LoadingScreenStyles as Styled } from './LoadingScreen.styles';

export const LoadingScreen: FC = () => {
  return (
    <Styled.LoadingScreenWrapper>
      <LinearProgress color="inherit" sx={Styled.LinearProgress} />
    </Styled.LoadingScreenWrapper>
  );
};
