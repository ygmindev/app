import { type LibraryPropsModel } from '@lib/frontend/library/components/Library/Library.models';
import { ChartContainer } from '@lib/frontend/chart/ChartContainer/ChartContainer';
import { type ChartContainerPropsModel } from '@lib/frontend/chart/ChartContainer/ChartContainer.models';

export const props: LibraryPropsModel<ChartContainerPropsModel> = {
  Component: ChartContainer,
  defaultProps: {},
  variants: [],
};
