import {
  type _VirtualizedListPropsModel,
  type _VirtualizedListRefModel,
} from '@lib/frontend/core/components/VirtualizedList/_VirtualizedList.models';
import { type RSFCPropsModel } from '@lib/frontend/core/core.models';
import { useStyles } from '@lib/frontend/style/hooks/useStyles/useStyles';
import { type WithIdModel } from '@lib/shared/core/utils/withId/withId.models';
import { type ForwardedRef, type ReactElement } from 'react';
import { forwardRef, useImperativeHandle, useRef } from 'react';
import { FlatList, type ScrollView } from 'react-native';

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
    const flatListRef = useRef<FlatList>(null);

    useImperativeHandle(ref, () => ({
      scrollTo: (flatListRef.current?.getScrollableNode() as ScrollView).scrollTo,
    }));

    return (
      <FlatList<TType>
        ItemSeparatorComponent={divider ? () => divider : undefined}
        contentContainerStyle={{ flex: 1 }}
        data={items}
        horizontal={isHorizontal}
        keyExtractor={({ id }) => id}
        ref={flatListRef}
        renderItem={({ index, item }) => render(item, index)}
        scrollEnabled
        style={styles}
        testID={testID}
      />
    );
  },
);
