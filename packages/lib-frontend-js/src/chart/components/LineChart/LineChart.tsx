import { _LineChart } from '@lib/frontend/data/components/LineChart/_LineChart';
import { type _LineChartPropsModel } from '@lib/frontend/data/components/LineChart/_LineChart.models';
import { type LineChartPropsModel } from '@lib/frontend/data/components/LineChart/LineChart.models';
import { composeComponent } from '@lib/frontend/core/utils/composeComponent/composeComponent';
import { variableName } from '@lib/shared/core/utils/variableName/variableName';

export const LineChart = composeComponent<LineChartPropsModel, _LineChartPropsModel>({
  Component: _LineChart,

  getProps: ({ children }) => ({
    children,
  }),
});

process.env.APP_IS_DEBUG && (LineChart.displayName = variableName({ LineChart }));
