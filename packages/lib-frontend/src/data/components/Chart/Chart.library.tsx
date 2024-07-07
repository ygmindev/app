import { Chart } from '@lib/frontend/data/components/Chart/Chart';
import { type ChartPropsModel } from '@lib/frontend/data/components/Chart/Chart.models';
import { type LibraryPropsModel } from '@lib/frontend/library/components/Library/Library.models';

export const props: LibraryPropsModel<ChartPropsModel> = {
  Component: Chart,
  defaultProps: {},
  variants: [],
};
