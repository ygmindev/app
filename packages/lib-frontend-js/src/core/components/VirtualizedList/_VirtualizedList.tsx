// TODO: is this right, or below commented out lines?
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

// import { getViewParams as getViewParamsScrollable } from '@lib/frontend/core/components/View/_View.scrollable';
// import {
//   type _VirtualizedListPropsModel,
//   type _VirtualizedListRefModel,
// } from '@lib/frontend/core/components/VirtualizedList/_VirtualizedList.models';
// import { type RLFCPropsModel } from '@lib/frontend/core/core.models';
// import { composeComponent } from '@lib/frontend/core/utils/composeComponent/composeComponent';
// import { type WithIdModel } from '@lib/shared/core/utils/withId/withId.models';
// import { type ReactElement } from 'react';
// import { useImperativeHandle, useRef } from 'react';
// import { FlatList, type FlatListProps } from 'react-native';

// const viewParamsScrollable = getViewParamsScrollable<
//   _VirtualizedListPropsModel<WithIdModel>,
//   FlatListProps<WithIdModel>,
//   _VirtualizedListRefModel
// >({
//   Component: ({ ref, ...props }) => {
//     const refF = useRef<FlatList>(null);

//     useImperativeHandle(ref, () => ({
//       scrollTo: (position) =>
//         refF.current?.scrollToOffset({
//           animated: false,
//           offset: props.horizontal ? (position.x ?? 0) : (position.y ?? 0),
//         }),
//     }));

//     return (
//       <FlatList
//         {...props}
//         ref={refF}
//       />
//     );
//   },

//   getProps: ({ divider, isHorizontal, itemSize, items, render }) => ({
//     ItemSeparatorComponent: divider ? () => divider : undefined,
//     data: items,
//     getItemLayout: itemSize
//       ? (_, index) => ({ index, length: itemSize, offset: itemSize * index })
//       : undefined,
//     horizontal: isHorizontal,
//     keyExtractor: ({ id }) => id,
//     renderItem: ({ index, item }) => render(item, index),
//     scrollEnabled: true,
//   }),
// });

// export const _VirtualizedList = composeComponent(viewParamsScrollable) as <
//   TType extends WithIdModel,
// >(
//   props: RLFCPropsModel<_VirtualizedListRefModel, _VirtualizedListPropsModel<TType>>,
// ) => ReactElement<RLFCPropsModel<_VirtualizedListRefModel, _VirtualizedListPropsModel<TType>>>;
