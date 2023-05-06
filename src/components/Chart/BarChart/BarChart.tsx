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
    theme,
  });
  return (
    <ReactApexChart
      type="bar"
      series={[{ data: series }]}
      // options={{
      //   xaxis: {
      //     categories: [
      //       '2023-05-06 09:00:00',
      //       '2023-05-06 12:00:00',
      //       '2023-05-06 15:00:00',
      //       '2023-05-06 18:00:00',
      //       '2023-05-06 21:00:00',
      //     ],
      //   },
      // }}
      options={defaultConfigOptions}
      width={'100%'}
      height={300}
    />
  );
};
