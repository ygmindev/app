import type {
  _VirtualizedListPropsModel,
  _VirtualizedListRefModel,
} from '@lib/frontend/core/components/VirtualizedList/_VirtualizedList.models';
import type { RSFCPropsModel, SFCPropsModel } from '@lib/frontend/core/core.models';
import { useStyles } from '@lib/frontend/style/hooks/useStyles/useStyles';
import type { WithIdModel } from '@lib/shared/core/decorators/withId/withId.models';
import type { ForwardedRef, ReactElement } from 'react';
import { forwardRef, useCallback } from 'react';
import type { ListRenderItem } from 'react-native';
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
    }: SFCPropsModel<_VirtualizedListPropsModel<TType>>,
    ref: ForwardedRef<_VirtualizedListRefModel>,
  ): ReactElement<RSFCPropsModel<_VirtualizedListPropsModel<TType>>> => {
    const { styles } = useStyles({ props });
    const _renderItem = useCallback<ListRenderItem<TType>>(({ item }) => render(item), [items]);
    return (
      <FlatList<TType>
        ItemSeparatorComponent={divider ? () => divider : undefined}
        contentContainerStyle={{ flex: 1 }}
        data={items}
        horizontal={isHorizontal}
        keyExtractor={({ id }) => id}
        ref={ref}
        renderItem={_renderItem}
        scrollEnabled
        style={styles}
        testID={testID}
      />
    );
  },
);
