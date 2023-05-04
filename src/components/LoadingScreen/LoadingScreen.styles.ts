import { styled } from '@mui/material';

export const LoadingScreenStyles = {
  LoadingScreenWrapper: styled('div')(({ theme }) => ({
    right: 0,
    bottom: 0,
    zIndex: 9998,
    width: '100%',
    height: '100%',
    position: 'fixed',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: theme.palette.background.default,
  })),
  LinearProgress: { width: 1, maxWidth: { xs: 290, sm: 360 } },
};
