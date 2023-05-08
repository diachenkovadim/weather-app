import { useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';

import { apiServices } from 'services/apiService';
import { fetchWeatherData, removeError } from 'services/redux/weatherReducer';
import { useAppDispatch, useAppSelector } from 'hooks/useRedux';
import useDebounce from 'hooks/useDebounce';

import { ROUTES } from 'constants/routes';
import { useSnackbar } from 'notistack';

interface IGeoAPIresponse {
  name: string;
  local_names: {
    [key: string]: string;
    feature_name: string;
  }[];
  lat: number;
  lon: number;
  country: string;
  state?: string;
}

export const useHeaderState = () => {
  const [isAutocompleteOpen, setIsAutocompleteOpen] = useState(false);
  const [searchValue, setSearchValue] = useState('');
  const [cities, setCities] = useState<IGeoAPIresponse[]>([]);
  const [selectedCity, setSelectedCity] = useState<IGeoAPIresponse | null>(
    null
  );
  const { enqueueSnackbar } = useSnackbar();

  const { isError, errorMessage } = useAppSelector((state) => state.weather);

  const onRemoveErroHandler = () => dispatch(removeError());

  const navigate = useNavigate();
  const dispatch = useAppDispatch();
  const { pathname } = useLocation();

  const onOpenAutocompleteHandler = () => setIsAutocompleteOpen(true);
  const onCloseAutocompleteHandler = () => setIsAutocompleteOpen(false);

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSearchValue(event.target.value);
    setSelectedCity(null);
  };

  const onAutocompleteChangeHandler = (
    event: React.SyntheticEvent<Element, Event>,
    value: IGeoAPIresponse | null
  ) => {
    setSelectedCity(value);
    onClickItemHandler(value?.lat || 0, value?.lon || 0);
  };

  const onClickItemHandler = (lat: number, lon: number) => {
    dispatch(fetchWeatherData({ lat, lon }));
    onCloseAutocompleteHandler();
    setCities([]);
    setSearchValue('');
    pathname !== ROUTES.home && navigate(ROUTES.home);
  };

  const debouncedSearchValue = useDebounce(searchValue);

  const onGetCityHandler = async () => {
    try {
      if (searchValue) {
        const { data }: { data: IGeoAPIresponse[] } =
          await apiServices.fetchCityGeoData({
            q: debouncedSearchValue,
            limit: 5,
          });
        setCities(data);
      } else {
        setCities([]);
      }
    } catch (error) {
      enqueueSnackbar({ variant: 'error', message: 'Failed to fetch cities' });
      console.log(error);
    }
  };

  return {
    onOpenAutocompleteHandler,
    onCloseAutocompleteHandler,
    onGetCityHandler,
    handleChange,
    onClickItemHandler,
    onRemoveErroHandler,
    enqueueSnackbar,
    onAutocompleteChangeHandler,
    selectedCity,
    errorMessage,
    isError,
    pathname,
    cities,
    debouncedSearchValue,
    searchValue,
    isAutocompleteOpen,
  };
};
