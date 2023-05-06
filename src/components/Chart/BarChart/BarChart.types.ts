import { ApexOptions } from 'apexcharts';

export type TCategories = Array<string | number>;

export interface IBarChartProps {
  chart: {
    colors?: string[];
    series: number[];
    categories: TCategories;
    options?: ApexOptions;
  };
}
