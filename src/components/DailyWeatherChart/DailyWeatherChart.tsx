import { FC } from 'react';
import { CardContent, CardHeader, Skeleton } from '@mui/material';

import { StyledCard } from 'styles/overrides/Card';
import { IChartData } from 'screens/WeatherDetails';

import { BarChart } from '../Chart/BarChart/BarChart';

interface IDailyWeatherChartProps {
  chartData: IChartData;
  isLoading: boolean;
}
export const DailyWeatherChart: FC<IDailyWeatherChartProps> = ({
  chartData,
  isLoading,
}) => {
  const { categories, series, options } = chartData;
  return (
    <StyledCard>
      <CardHeader title="Daily Forecast" />
      <CardContent>
        {isLoading ? (
          <Skeleton variant="rounded" sx={{ width: 1, height: 200 }} />
        ) : (
          <BarChart
            chart={{
              series,
              categories,
              options,
            }}
          />
        )}
      </CardContent>
    </StyledCard>
  );
};
