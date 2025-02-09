import { ChartContainer } from '@lib/frontend/chart/ChartContainer/ChartContainer';
import { type ChartContainerFixtureModel } from '@lib/frontend/chart/ChartContainer/ChartContainer.fixtures';
import { type ChartContainerPropsModel } from '@lib/frontend/chart/ChartContainer/ChartContainer.models';
import { type LibraryPropsModel } from '@lib/frontend/library/components/Library/Library.models';

export const props: LibraryPropsModel<ChartContainerPropsModel<ChartContainerFixtureModel>> = {
  Component: ChartContainer,
  defaultProps: {},
  variants: [],
};
