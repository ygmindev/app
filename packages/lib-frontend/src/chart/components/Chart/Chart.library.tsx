import { type LibraryPropsModel } from '#lib-library/core/components/Library/Library.models';
import { Chart } from '#lib-frontend/chart/components/Chart/Chart';
import { type ChartPropsModel } from '#lib-frontend/chart/components/Chart/Chart.models';

export const props: LibraryPropsModel<ChartPropsModel> = {
  Component: Chart,
  defaultProps: {},
  variants: [],
};
