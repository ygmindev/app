import type { ReactElement } from 'react';
import type { FlatList } from 'react-native';

import type { WithIdModel } from '#lib-shared/core/decorators/withId/withId.models';

export interface _VirtualizedListPropsModel<TType extends WithIdModel> {
  divider?: ReactElement;
  isHorizontal?: boolean;
  items: Array<TType>;
  render(item: TType): ReactElement;
}

export interface _VirtualizedListRefModel extends FlatList {}
