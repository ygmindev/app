import { type _ChartPropsModel } from '@lib/frontend/data/components/Chart/_Chart.models';
import { type ChartProps } from 'Chart';
import { Chart } from 'Chart';
import { composeComponent } from '@lib/frontend/core/utils/composeComponent/composeComponent';

export const _Chart = composeComponent<_ChartPropsModel, ChartProps>({
  Component: Chart,

  getProps: ({ children }) => ({
    children,
  }),
});
