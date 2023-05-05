import { FC } from 'react';
import { Card, Modal, ModalProps } from '@mui/material';

import { ModalWindowStyles as Styled } from './ModalWindow.syles';

export const ModalWindow: FC<ModalProps> = (props) => {
  const { open, children, onClose, ...others } = props;
  return (
    <Modal open={open} onClose={onClose} {...others} sx={{ m: 1 }}>
      <Card sx={Styled.CardSX}>{children}</Card>
    </Modal>
  );
};
