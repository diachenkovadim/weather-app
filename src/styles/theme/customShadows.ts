import { alpha } from '@mui/material/styles';

import { palette } from './palette';

interface CustomShadowOptions {
  primary: string;
  info: string;
  card: string;
}

declare module '@mui/material/styles' {
  interface Theme {
    customShadows: CustomShadowOptions;
  }
  interface ThemeOptions {
    customShadows?: CustomShadowOptions;
  }
}

const themeColor = palette();

const LIGHT_MODE = themeColor.grey[500];

const createShadow = (color: string) => {
  return {
    primary: `0 8px 16px 0 ${alpha(palette().primary.main, 0.24)}`,
    info: `0 8px 16px 0 ${alpha(palette().info.main, 0.24)}`,
    card: `0 0 2px 0 ${alpha(color, 0.2)}, 0 12px 24px -4px ${alpha(
      color,
      0.12
    )}`,
  };
};

export const customShadows = () => createShadow(LIGHT_MODE);
