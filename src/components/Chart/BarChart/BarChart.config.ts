import { Theme } from '@mui/material';
import { ApexOptions } from 'apexcharts';

import { roundNumber } from 'utils/formatNumber';

import { TCategories } from './BarChart.types';

interface IgetDefaultChartOptionsProps {
  options?: ApexOptions;
  categories: TCategories;
  theme: Theme;
}

export const getDefaultChartOptions = (
  props: IgetDefaultChartOptionsProps
): ApexOptions => {
  const { categories, options, theme } = props;

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
    // tooltip: {
    //   custom: (options) => {
    //     console.log(options);

    //     return `
    //     <div class="tooltipWrapper">
    //       <div>Max temp: ${10}°C</div>
    //       <div>Min temp: ${11}°C</div>
    //     </div>`;
    //   },
    // },

    ...options,
    //change styles on breakpoints
    // responsive: [
    //   {
    //     breakpoint: theme.breakpoints.values.sm,
    //     options: {
    //       plotOptions: { bar: { columnWidth: '70%' } },
    //       chart: {
    //         width: 220,
    //         height: 160,
    //       },
    //     },
    //   },
    //   {
    //     breakpoint: theme.breakpoints.values.md,
    //     options: {
    //       plotOptions: { bar: { columnWidth: '70%' } },
    //     },
    //   },
    // ],
  };
};
