import { ChartContainer } from '@lib/frontend/chart/ChartContainer/ChartContainer';
import { _BarChart } from '@lib/frontend/chart/components/BarChart/_BarChart';
import { type BarChartPropsModel } from '@lib/frontend/chart/components/BarChart/BarChart.models';
import { type SFCPropsModel } from '@lib/frontend/core/core.models';
import { type ReactElement } from 'react';

export const BarChart = <TType,>({
  ...props
}: SFCPropsModel<BarChartPropsModel<TType>>): ReactElement<
  SFCPropsModel<BarChartPropsModel<TType>>
> => (
  <ChartContainer {...props}>
    <_BarChart />
  </ChartContainer>
);
