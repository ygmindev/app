import {
  type ChartContainerFixtureModel,
  chartContainerFixturePropsFixture,
} from '@lib/frontend/chart/ChartContainer/ChartContainer.fixtures';
import { ScatterChart } from '@lib/frontend/chart/components/ScatterChart/ScatterChart';
import { type ScatterChartPropsModel } from '@lib/frontend/chart/components/ScatterChart/ScatterChart.models';
import { LIBRARY_CATEGORY_CHARTING } from '@lib/frontend/library/components/Library/Library.constants';
import { type LibraryPropsModel } from '@lib/frontend/library/components/Library/Library.models';

export const props: LibraryPropsModel<ScatterChartPropsModel<ChartContainerFixtureModel>> = {
  Component: ScatterChart,
  category: LIBRARY_CATEGORY_CHARTING,
  defaultProps: {
    ...chartContainerFixturePropsFixture,
  },
  variants: [],
};
