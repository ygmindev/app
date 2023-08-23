import { VictoryBar, VictoryChart, type VictoryChartProps } from 'victory';

import { type _ChartPropsModel } from '#lib-frontend/chart/components/Chart/_Chart.models';
import { composeComponent } from '#lib-frontend/core/utils/composeComponent/composeComponent';

export const _Chart = composeComponent<_ChartPropsModel, VictoryChartProps>({
  Component: VictoryChart,

  getProps: ({ children }) => ({
    children: (
      <VictoryBar
        data={[
          { x: 1, y: 2 },
          { x: 3, y: 4 },
          { x: 4, y: 5 },
        ]}
        x="x"
        y="y"
      />
    ),
  }),
});
