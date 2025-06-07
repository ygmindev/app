import {
  type ChartContainerFixtureModel,
  chartContainerFixturePropsFixture,
} from '@lib/frontend/chart/ChartContainer/ChartContainer.fixtures';
import { BarChart } from '@lib/frontend/chart/components/BarChart/BarChart';
import { type BarChartPropsModel } from '@lib/frontend/chart/components/BarChart/BarChart.models';
import { LIBRARY_CATEGORY_CHARTING } from '@lib/frontend/library/components/Library/Library.constants';
import { type LibraryPropsModel } from '@lib/frontend/library/components/Library/Library.models';

export const props: LibraryPropsModel<BarChartPropsModel<ChartContainerFixtureModel>> = {
  Component: BarChart,
  category: LIBRARY_CATEGORY_CHARTING,
  defaultProps: {
    ...chartContainerFixturePropsFixture,
  },
  variants: [],
};
