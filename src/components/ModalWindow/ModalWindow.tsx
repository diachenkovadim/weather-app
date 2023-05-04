import { FC } from 'react';
import { Card, Modal, ModalProps } from '@mui/material';

import { ModalWindowStyles as Styled } from './ModalWindow.syles';

interface IModalWindowProps extends ModalProps {}

export const ModalWindow: FC<IModalWindowProps> = (props) => {
  const { open, children, onClose, ...others } = props;
  return (
    <Modal open={open} onClose={onClose} {...others} sx={{ m: 1 }}>
      <Card sx={Styled.CardSX}>{children}</Card>
    </Modal>
  );
};
