import { type PositionModel } from '@lib/frontend/core/core.models';
import { type WithIdModel } from '@lib/shared/core/utils/withId/withId.models';
import { type ReactElement } from 'react';

export type _VirtualizedListPropsModel<TType extends WithIdModel> = {
  divider?: ReactElement;
  isHorizontal?: boolean;
  items: Array<TType>;
  render(item: TType, index: number): ReactElement;
};

export type _VirtualizedListRefModel = {
  scrollTo(params: PositionModel): void;
};
