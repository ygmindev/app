import { type LibraryPropsModel } from '@lib/frontend/library/components/Library/Library.models';
import { LineChart } from '@lib/frontend/data/components/LineChart/LineChart';
import { type LineChartPropsModel } from '@lib/frontend/data/components/LineChart/LineChart.models';

export const props: LibraryPropsModel<LineChartPropsModel> = {
  Component: LineChart,
  defaultProps: {},
  variants: [],
};
