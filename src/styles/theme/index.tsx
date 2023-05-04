import { useMemo } from 'react';

import { CssBaseline } from '@mui/material';
import {
  ThemeProvider as MUIThemeProvider,
  StyledEngineProvider,
  ThemeOptions,
  createTheme,
} from '@mui/material/styles';

import { customShadows } from './customShadows';
import { GlobalStyles } from './globalStyles';
import { palette } from './palette';
import { shadows } from './shadows';
import { typography } from './typography';

type TProps = {
  children: React.ReactNode;
};

export const ThemeProvider = ({ children }: TProps) => {
  const themeOptions: ThemeOptions = useMemo(
    () => ({
      palette: palette(),
      typography,
      shape: { borderRadius: 8 },
      shadows: shadows(),
      customShadows: customShadows(),
    }),
    []
  );

  const theme = createTheme(themeOptions);

  return (
    <StyledEngineProvider injectFirst>
      <MUIThemeProvider theme={theme}>
        <CssBaseline />
        <GlobalStyles />
        {children}
      </MUIThemeProvider>
    </StyledEngineProvider>
  );
};
