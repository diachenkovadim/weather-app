import { styled } from '@mui/material';

export const ModalWindowStyles = {
  CardSX: {
    position: 'absolute' as 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    maxWidth: '400px',
    width: '100%',
    bgcolor: 'background.paper',
    px: 3,
    py: 4,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'column',
  },
  StyledForm: styled('form')(() => ({
    width: '100%',
  })),
};
