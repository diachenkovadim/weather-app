import { FC } from 'react';
import ReactApexChart from 'react-apexcharts';
import { useTheme } from '@mui/material';

import { getDefaultChartOptions } from './BarChart.config';
import { IBarChartProps } from './BarChart.types';

export const BarChart: FC<IBarChartProps> = ({ chart }) => {
  const theme = useTheme();
  const defaultColors = [theme.palette.warning.main];
  const { categories, series, colors = defaultColors, options } = chart;

  const defaultConfigOptions = getDefaultChartOptions({
    categories,
    options,
    colors,
    theme,
  });
  return (
    <ReactApexChart
      type="bar"
      series={[{ data: series }]}
      options={defaultConfigOptions}
      width="100%"
      height={300}
    />
  );
};
