import { ChartContainer } from '@lib/frontend/chart/ChartContainer/ChartContainer';
import { _ScatterChart } from '@lib/frontend/chart/components/ScatterChart/_ScatterChart';
import { type ScatterChartPropsModel } from '@lib/frontend/chart/components/ScatterChart/ScatterChart.models';
import { type SFCPropsModel } from '@lib/frontend/core/core.models';
import { type ReactElement } from 'react';

export const ScatterChart = <TType,>({
  ...props
}: SFCPropsModel<ScatterChartPropsModel<TType>>): ReactElement<
  SFCPropsModel<ScatterChartPropsModel<TType>>
> => (
  <ChartContainer {...props}>
    <_ScatterChart />
  </ChartContainer>
);
