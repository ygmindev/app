import { ChartContainer } from '@lib/frontend/chart/ChartContainer/ChartContainer';
import { _LineChart } from '@lib/frontend/chart/components/LineChart/_LineChart';
import { type LineChartPropsModel } from '@lib/frontend/chart/components/LineChart/LineChart.models';
import { type SFCPropsModel } from '@lib/frontend/core/core.models';
import { type ReactElement } from 'react';

export const LineChart = <TType,>({
  ...props
}: SFCPropsModel<LineChartPropsModel<TType>>): ReactElement<
  SFCPropsModel<LineChartPropsModel<TType>>
> => (
  <ChartContainer {...props}>
    <_LineChart />
  </ChartContainer>
);
