import { Theme } from '@mui/material';
import { ApexOptions } from 'apexcharts';

import { roundNumber } from 'utils/formatNumber';

import { TCategories } from './BarChart.types';

interface IgetDefaultChartOptionsProps {
  options?: ApexOptions;
  categories: TCategories;
  theme: Theme;
  colors: string[];
}

export const getDefaultChartOptions = (
  props: IgetDefaultChartOptionsProps
): ApexOptions => {
  const { categories, options, colors, theme } = props;

  return {
    stroke: { show: false },
    dataLabels: {
      formatter(val) {
        return `${roundNumber(Number(val || 0)).toString()} °C`;
      },
      style: {
        fontSize: '14px',
        fontWeight: 'bold',
        colors: [theme.palette.grey[800]],
      },
    },
    chart: {
      zoom: {
        enabled: false,
      },
      toolbar: {
        show: false,
      },
    },
    states: {
      hover: {
        filter: {
          type: 'darken',
          value: 0.8,
        },
      },
    },
    plotOptions: {
      bar: {
        columnWidth: '70%',
      },
    },
    colors,
    yaxis: {
      labels: {
        formatter: (val) => `${val.toString()} °C`,
      },
      title: {
        text: 'Temperature',
      },
    },
    xaxis: {
      tickPlacement: 'on',
      categories,
    },
    ...options,
    responsive: [
      {
        breakpoint: theme.breakpoints.values.sm,
        options: {
          dataLabels: {
            enabled: false,
          },
          tooltip: {
            fixed: {
              enabled: true,
              position: 'top',
            },
          },
        },
      },
      {
        breakpoint: theme.breakpoints.values.md,
        options: {
          dataLabels: {
            enabled: true,
          },
          tooltip: {
            fixed: {
              enabled: false,
            },
          },
        },
      },
    ],
  };
};
