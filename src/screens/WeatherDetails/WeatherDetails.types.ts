import { ApexOptions } from 'apexcharts';

import { getDetailsFields } from './helpers';

export type TWeatherDetailsFields = ReturnType<typeof getDetailsFields>;

export interface IChartData {
  categories: string[];
  series: number[];
  options?: ApexOptions;
}
