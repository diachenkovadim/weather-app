import { Box, alpha, styled } from '@mui/material';

export const WeatherCardStyles = {
  StyledBox: styled(Box)(({ theme }) => ({
    display: 'flex',
    ':hover': {
      boxShadow: theme.customShadows.primary,
    },
    padding: 5,
    borderRadius: 8,
    backgroundColor: alpha(theme.palette.common.white, 0.5),
  })),
};
