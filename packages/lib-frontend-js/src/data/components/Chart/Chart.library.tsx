import { Chart } from '@lib/frontend/data/components/Chart/Chart';
import {
  type ChartFixtureModel,
  chartPropsFixture,
} from '@lib/frontend/data/components/Chart/Chart.fixtures';
import { type ChartPropsModel } from '@lib/frontend/data/components/Chart/Chart.models';
import { type LibraryPropsModel } from '@lib/frontend/library/components/Library/Library.models';

export const props: LibraryPropsModel<ChartPropsModel<ChartFixtureModel>> = {
  Component: Chart,
  defaultProps: {
    ...chartPropsFixture,
    height: 400,
    width: 400,
  },
  variants: [],
};
