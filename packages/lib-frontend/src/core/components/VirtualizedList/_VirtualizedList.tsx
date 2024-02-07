import {
  type _VirtualizedListPropsModel,
  type _VirtualizedListRefModel,
} from '@lib/frontend/core/components/VirtualizedList/_VirtualizedList.models';
import { type RSFCPropsModel } from '@lib/frontend/core/core.models';
import { useStyles } from '@lib/frontend/style/hooks/useStyles/useStyles';
import { type WithIdModel } from '@lib/shared/core/utils/withId/withId.models';
import { type ForwardedRef, type ReactElement } from 'react';
import { forwardRef, useCallback } from 'react';
import { type ListRenderItem } from 'react-native';
import { FlatList } from 'react-native';

export const _VirtualizedList = forwardRef(
  <TType extends WithIdModel>(
    {
      divider,
      isHorizontal,
      items,
      render,
      testID,
      ...props
    }: RSFCPropsModel<_VirtualizedListRefModel, _VirtualizedListPropsModel<TType>>,
    ref: ForwardedRef<_VirtualizedListRefModel>,
  ): ReactElement<RSFCPropsModel<_VirtualizedListRefModel, _VirtualizedListPropsModel<TType>>> => {
    const { styles } = useStyles({ props });
    const renderItem = useCallback<ListRenderItem<TType>>(({ item }) => render(item), [items]);
    return (
      <FlatList<TType>
        ItemSeparatorComponent={divider ? () => divider : undefined}
        contentContainerStyle={{ flex: 1 }}
        data={items}
        horizontal={isHorizontal}
        keyExtractor={({ id }) => id}
        ref={ref}
        renderItem={renderItem}
        scrollEnabled
        style={styles}
        testID={testID}
      />
    );
  },
);
