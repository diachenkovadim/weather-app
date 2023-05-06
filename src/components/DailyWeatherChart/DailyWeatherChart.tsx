import { FC } from 'react';
import { CardContent, CardHeader } from '@mui/material';

import { StyledCard } from 'styles/overrides/Card';
import { IChartData } from 'screens/WeatherDetails';

import { BarChart } from '../Chart/BarChart/BarChart';

interface IDailyWeatherChartProps {
  chartData: IChartData;
}
export const DailyWeatherChart: FC<IDailyWeatherChartProps> = ({
  chartData,
}) => {
  const { categories, series, options } = chartData;
  return (
    <StyledCard>
      <CardHeader title="Daily Forecast" />
      <CardContent>
        <BarChart
          chart={{
            series,
            categories,
            options,
          }}
        />
      </CardContent>
    </StyledCard>
  );
};
