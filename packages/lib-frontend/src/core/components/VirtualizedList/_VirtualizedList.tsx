import type { _VirtualizedListPropsModel } from '@lib/frontend/core/components/VirtualizedList/_VirtualizedList.models';
import type { SFCPropsModel } from '@lib/frontend/core/core.models';
import { useStyles } from '@lib/frontend/style/hooks/useStyles/useStyles';
import type { WithIdModel } from '@lib/shared/core/decorators/withId/withId.models';
import type { ReactElement } from 'react';
import { useCallback } from 'react';
import type { ListRenderItem } from 'react-native';
import { FlatList } from 'react-native';

export const _VirtualizedList = <TType extends WithIdModel>({
  divider,
  items,
  render,
  testID,
  ...props
}: SFCPropsModel<_VirtualizedListPropsModel<TType>>): ReactElement<
  SFCPropsModel<_VirtualizedListPropsModel<TType>>
> => {
  const { styles } = useStyles({
    props,
  });
  const _renderItem = useCallback<ListRenderItem<TType>>(({ item }) => render(item), [items]);
  return (
    <FlatList<TType>
      ItemSeparatorComponent={divider ? () => divider : undefined}
      contentContainerStyle={{ flex: 1 }}
      data={items}
      keyExtractor={({ id }) => id}
      renderItem={_renderItem}
      style={styles}
      testID={testID}
    />
  );
};
