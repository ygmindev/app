import { type WithIdModel } from '@lib/shared/core/utils/withId/withId.models';
import { type ReactElement } from 'react';
import { type FlatList } from 'react-native';

export type _VirtualizedListPropsModel<TType extends WithIdModel> = {
  divider?: ReactElement;
  isHorizontal?: boolean;
  items: Array<TType>;
  render(item: TType): ReactElement;
};

export type _VirtualizedListRefModel = FlatList;
