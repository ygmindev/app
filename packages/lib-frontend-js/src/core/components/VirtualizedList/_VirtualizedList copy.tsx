import { getViewParams as getViewParamsScrollable } from '@lib/frontend/core/components/View/_View.scrollable';
import {
  type _VirtualizedListPropsModel,
  type _VirtualizedListRefModel,
} from '@lib/frontend/core/components/VirtualizedList/_VirtualizedList.models';
import { type RSFCPropsModel } from '@lib/frontend/core/core.models';
import { useStyles } from '@lib/frontend/style/hooks/useStyles/useStyles';
import { type WithIdModel } from '@lib/shared/core/utils/withId/withId.models';
import { type ReactElement } from 'react';
import { useImperativeHandle, useRef } from 'react';
import { FlatList, type ScrollView } from 'react-native';

const viewParams = getViewParamsScrollable();

export const _VirtualizedList = <TType extends WithIdModel>({
  divider,
  isHorizontal,
  items,
  ref,
  render,
  testID,
  ...props
}: RSFCPropsModel<_VirtualizedListRefModel, _VirtualizedListPropsModel<TType>>): ReactElement<
  RSFCPropsModel<_VirtualizedListRefModel, _VirtualizedListPropsModel<TType>>
> => {
  const { styles } = useStyles({ props });
  const flatListRef = useRef<FlatList>(null);

  useImperativeHandle(ref, () => ({
    scrollTo: ({ x, y }) =>
      (flatListRef.current?.getScrollableNode() as ScrollView).scrollTo({
        animated: false,
        x,
        y,
      }),
  }));

  return (
    <FlatList<TType>
      {...viewParams}
      ItemSeparatorComponent={divider ? () => divider : undefined}
      contentContainerStyle={{ flexGrow: 1 }}
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
};
