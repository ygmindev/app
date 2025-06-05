import { ChartContainer } from '@lib/frontend/chart/ChartContainer/ChartContainer';
import { _AreaChart } from '@lib/frontend/chart/components/AreaChart/_AreaChart';
import { type AreaChartPropsModel } from '@lib/frontend/chart/components/AreaChart/AreaChart.models';
import { type SFCPropsModel } from '@lib/frontend/core/core.models';
import { type ReactElement } from 'react';

export const AreaChart = <TType,>({
  ...props
}: SFCPropsModel<AreaChartPropsModel<TType>>): ReactElement<
  SFCPropsModel<AreaChartPropsModel<TType>>
> => (
  <ChartContainer {...props}>
    <_AreaChart />
  </ChartContainer>
);
