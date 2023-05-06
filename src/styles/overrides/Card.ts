import { Card as MUICard, styled } from '@mui/material';

export const StyledCard = styled(MUICard)(({ theme }) => ({
  borderRadius: 16,
  boxShadow: theme.customShadows.card,
  ':hover': {
    cursor: 'pointer',
    boxShadow: theme.customShadows.info
  },
}));
