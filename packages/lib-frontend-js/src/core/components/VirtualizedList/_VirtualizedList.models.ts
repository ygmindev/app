import { type _ViewPropsModel } from '@lib/frontend/core/components/View/_View.models';
import { type ScrollableViewRefModel } from '@lib/frontend/core/components/View/View.models';
import { type WithIdModel } from '@lib/shared/core/utils/withId/withId.models';
import { type ReactElement } from 'react';

export type _VirtualizedListPropsModel<TType extends WithIdModel> = _ViewPropsModel & {
  divider?: ReactElement;
  isHorizontal?: boolean;
  itemSize?: number;
  items: Array<TType>;
  render(item: TType, index: number): ReactElement;
};

export type _VirtualizedListRefModel = ScrollableViewRefModel;
