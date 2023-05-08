import { Card as MUICard, styled } from '@mui/material';

export const StyledCard = styled(MUICard, {
  shouldForwardProp: (prop) => prop !== 'direction',
})<{ direction?: 'right' | 'bottom' | 'top' | 'left' }>(
  ({ theme, direction = 'right' }) => ({
    borderRadius: 16,
    boxShadow: theme.customShadows.card,
    background: `linear-gradient(to ${direction}, ${theme.palette.success.lighter}, ${theme.palette.success.light})`,
    ':hover': {
      cursor: 'pointer',
      boxShadow: theme.customShadows.info,
    },
  })
);
