import {
  type ChartContainerFixtureModel,
  chartContainerFixturePropsFixture,
} from '@lib/frontend/chart/ChartContainer/ChartContainer.fixtures';
import { AreaChart } from '@lib/frontend/chart/components/AreaChart/AreaChart';
import { type AreaChartPropsModel } from '@lib/frontend/chart/components/AreaChart/AreaChart.models';
import { Wrapper } from '@lib/frontend/core/components/Wrapper/Wrapper';
import { LIBRARY_CATEGORY_CHARTING } from '@lib/frontend/library/components/Library/Library.constants';
import { type LibraryPropsModel } from '@lib/frontend/library/components/Library/Library.models';

export const props: LibraryPropsModel<AreaChartPropsModel<ChartContainerFixtureModel>> = {
  Component: AreaChart,
  Renderer: ({ element }) => (
    <Wrapper
      height={400}
      width={400}>
      {element}
    </Wrapper>
  ),
  category: LIBRARY_CATEGORY_CHARTING,
  defaultProps: {
    ...chartContainerFixturePropsFixture,
  },
  variants: [],
};
