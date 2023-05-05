import { FC } from 'react';
import { Box, BoxProps } from '@mui/material';

interface IImageBoxProps extends BoxProps {
  imagePath: string;
}

export const ImageBox: FC<IImageBoxProps> = ({ imagePath, ...other }) => (
  <Box
    sx={{ display: 'flex', justifyContent: 'center' }}
    component="img"
    src={require(`assets/pictures/${imagePath}.png`)}
    alt="weather picture"
    {...other}
  />
);
