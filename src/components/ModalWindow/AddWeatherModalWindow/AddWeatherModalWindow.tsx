import { FC } from 'react';
import { Alert, Button, Stack, TextField } from '@mui/material';
import AddIcon from '@mui/icons-material/Add';

import { ModalWindow } from '../ModalWindow';
import { useAddWeatherModalWindowState } from './AddWeatherModalWindow.state';
import { ModalWindowStyles as Styled } from '../ModalWindow.syles';

interface IAddWeatherModalWindowProps {
  isOpenModalWindow: boolean;
  onToggleModalWindow: () => void;
}
export const AddWeatherModalWindow: FC<IAddWeatherModalWindowProps> = (
  props
) => {
  const { isOpenModalWindow, onToggleModalWindow } = props;
  const {
    isAddButtonDisabled,
    errors,
    isErrorMessage,
    onCloseModalWindowHandler,
    register,
    onAddWeatherHandler,
  } = useAddWeatherModalWindowState({ onToggleModalWindow });
  
  return (
    <ModalWindow open={isOpenModalWindow} onClose={onCloseModalWindowHandler}>
      <Styled.StyledForm onSubmit={onAddWeatherHandler}>
        <Stack spacing={5}>
          {isErrorMessage && (
            <Alert sx={{ alignItems: 'center' }} severity="error" color="error">
              {errors?.cityName?.message}
            </Alert>
          )}

          <TextField fullWidth label="City name" {...register('cityName')} />
          <Stack direction="row" justifyContent="space-between">
            <Button variant="contained">Cancel</Button>
            <Button
              variant="contained"
              color="success"
              disabled={isAddButtonDisabled}
              endIcon={<AddIcon />}
              onClick={onAddWeatherHandler}
            >
              Add weather
            </Button>
          </Stack>
        </Stack>
      </Styled.StyledForm>
    </ModalWindow>
  );
};
