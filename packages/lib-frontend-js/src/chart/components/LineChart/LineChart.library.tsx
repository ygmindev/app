import {
  type ChartContainerFixtureModel,
  chartContainerFixturePropsFixture,
} from '@lib/frontend/chart/ChartContainer/ChartContainer.fixtures';
import { LineChart } from '@lib/frontend/chart/components/LineChart/LineChart';
import { type LineChartPropsModel } from '@lib/frontend/chart/components/LineChart/LineChart.models';
import { LIBRARY_CATEGORY_CHARTING } from '@lib/frontend/library/components/Library/Library.constants';
import { type LibraryPropsModel } from '@lib/frontend/library/components/Library/Library.models';

export const props: LibraryPropsModel<LineChartPropsModel<ChartContainerFixtureModel>> = {
  Component: LineChart,
  category: LIBRARY_CATEGORY_CHARTING,
  defaultProps: {
    ...chartContainerFixturePropsFixture,
  },
  variants: [],
};
