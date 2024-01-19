import {
  type _VirtualizedListPropsModel,
  type _VirtualizedListRefModel,
} from '@lib/frontend/core/components/VirtualizedList/_VirtualizedList.models';
import { type WithIdModel } from '@lib/shared/core/utils/withId/withId.models';

export type VirtualizedListPropsModel<TType extends WithIdModel> = Omit<
  _VirtualizedListPropsModel<TType>,
  'divider'
>;

export type VirtualizedListRefModel = _VirtualizedListRefModel;
