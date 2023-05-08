import { FC, useEffect } from 'react';
import { AppBar, Autocomplete, Stack, TextField, Toolbar } from '@mui/material';

import { useHeaderState } from './Header.state';

import { HEADER_CONFIG } from 'constants/config';

export const Header: FC = () => {
  const {
    onCloseAutocompleteHandler,
    onOpenAutocompleteHandler,
    handleChange,
    onGetCityHandler,
    onClickItemHandler,
    isAutocompleteOpen,
    cities,
    debouncedSearchValue,
    pathname,
    isError,
    errorMessage,
    onRemoveErroHandler,
    enqueueSnackbar,
    selectedCity,
    onAutocompleteChangeHandler,
  } = useHeaderState();

  useEffect(() => {
    onGetCityHandler();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [debouncedSearchValue]);

  useEffect(() => {
    isAutocompleteOpen && onCloseAutocompleteHandler();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [pathname]);

  useEffect(() => {
    isError &&
      enqueueSnackbar({
        variant: 'error',
        message: errorMessage,
      });
    return () => {
      onRemoveErroHandler();
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isError]);

  return (
    <AppBar position="static" color="inherit">
      <Toolbar
        sx={{
          justifyContent: 'space-between',
          height: {
            xs: HEADER_CONFIG.H_MOBILE,
            md: HEADER_CONFIG.H_MAIN,
          },
        }}
      >
        <Autocomplete
          data-testid="autocomplete"
          fullWidth
          size="small"
          value={selectedCity}
          open={isAutocompleteOpen}
          onOpen={onOpenAutocompleteHandler}
          clearOnEscape
          onBlur={onCloseAutocompleteHandler}
          onChange={onAutocompleteChangeHandler}
          getOptionLabel={(data) =>
            `${data.name}, ${data.country}. Latitude ${data.lat} - Longitude ${data.lon}`
          }
          renderInput={(params) => (
            <TextField
              {...params}
              data-testid="input"
              label="Enter city name"
              fullWidth
              onChange={handleChange}
            />
          )}
          options={cities}
          renderOption={(props, option, state) => {
            const onClick = () => {
              onClickItemHandler(option.lat, option.lon);
              state.inputValue = '';
            };
            return (
              <li
                {...props}
                key={`${option.lat}${option.lon}`}
                onClick={onClick}
              >
                <Stack direction="row" spacing={1}>
                  <div>{`${option.name}, ${option.country}. Latitude ${option.lat} - Longitude ${option.lon}`}</div>
                </Stack>
              </li>
            );
          }}
          filterOptions={(x) => x}
        />
      </Toolbar>
    </AppBar>
  );
};
