import type { WithIdModel } from '@lib/shared/core/decorators/withId/withId.models';
import type { ReactElement } from 'react';
import type { FlatList } from 'react-native';

export interface _VirtualizedListPropsModel<TType extends WithIdModel> {
  divider?: ReactElement;
  items: Array<TType>;
  render(item: TType): ReactElement;
}

export interface _VirtualizedListRefModel extends FlatList {}
