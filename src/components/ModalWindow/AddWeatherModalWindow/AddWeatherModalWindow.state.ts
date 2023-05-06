import { yupResolver } from '@hookform/resolvers/yup';
import { useForm } from 'react-hook-form';

import { useAppDispatch } from 'hooks/useRedux';
import { cityNameValidationSchema } from 'services/validation';

import { defaultFormValues } from './AddWeatherModalWindow.contants';
import { fetchWeatherData } from '../../../services/redux/weatherReducer';

interface IuseAddWeatherModalWindowStateProps {
  onToggleModalWindow: () => void;
}
export const useAddWeatherModalWindowState = (
  props: IuseAddWeatherModalWindowStateProps
) => {
  const { onToggleModalWindow } = props;
  const dispatch = useAppDispatch();

  const {
    reset,
    handleSubmit,
    register,
    watch,
    formState: { errors, isSubmitting, isSubmitSuccessful, isValid },
  } = useForm({
    resolver: yupResolver(cityNameValidationSchema),
    defaultValues: defaultFormValues,
  });

  const onAddWeatherHandler = handleSubmit((values) => {
    console.log(values);

    dispatch(fetchWeatherData(values.cityName));
    reset();
    onToggleModalWindow();
  });

  const onCloseModalWindowHandler = () => {
    onToggleModalWindow();
    const value = watch().cityName;
    value && reset();
  };

  const isErrorMessage = !!errors.cityName && !isSubmitSuccessful;

  const isAddButtonDisabled = !isValid || isSubmitting;

  return {
    onAddWeatherHandler,
    isErrorMessage,
    register,
    errors,
    onCloseModalWindowHandler,
    isAddButtonDisabled,
  };
};
