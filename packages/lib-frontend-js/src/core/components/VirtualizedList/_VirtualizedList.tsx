import { getViewParams as getViewParamsScrollable } from '@lib/frontend/core/components/View/_View.scrollable';
import {
  type _VirtualizedListPropsModel,
  type _VirtualizedListRefModel,
} from '@lib/frontend/core/components/VirtualizedList/_VirtualizedList.models';
import { type RSFCPropsModel } from '@lib/frontend/core/core.models';
import { useTheme } from '@lib/frontend/style/hooks/useTheme/useTheme';
import { type WithIdModel } from '@lib/shared/core/utils/withId/withId.models';
import { type ReactElement } from 'react';
import { useImperativeHandle, useRef } from 'react';
import { FlatList, type FlatListProps, type ScrollView } from 'react-native';

const _FlatList = <TType extends WithIdModel>({
  ref,
  ...props
}: RSFCPropsModel<_VirtualizedListRefModel, FlatListProps<TType>>): ReactElement<
  RSFCPropsModel<_VirtualizedListRefModel, FlatListProps<TType>>
> => {
  const flatListRef = useRef<FlatList>(null);
  useImperativeHandle(ref, () => ({
    scrollTo: ({ isAnimated, x, y }) =>
      (flatListRef.current?.getScrollableNode() as ScrollView).scrollTo({
        animated: isAnimated,
        x,
        y,
      }),
  }));
  return (
    <FlatList
      {...props}
      ref={flatListRef}
    />
  );
};

const viewParams = getViewParamsScrollable<
  _VirtualizedListPropsModel<WithIdModel>,
  FlatListProps<WithIdModel>,
  _VirtualizedListRefModel
>({
  Component: _FlatList,
  getProps: ({ divider, isHorizontal, items, render, ...props }) => ({
    ...props,
    ItemSeparatorComponent: divider ? () => divider : undefined,
    data: items,
    horizontal: isHorizontal,
    keyExtractor: ({ id }) => id,
    onScroll: undefined,
    renderItem: ({ index, item }) => render(item, index),
  }),
});

export const _VirtualizedList = <TType extends WithIdModel>({
  ...props
}: RSFCPropsModel<_VirtualizedListRefModel, _VirtualizedListPropsModel<TType>>): ReactElement<
  RSFCPropsModel<_VirtualizedListRefModel, _VirtualizedListPropsModel<TType>>
> => {
  const theme = useTheme();
  const { Component, getProps } = viewParams;
  return <Component {...getProps?.({ ...props }, theme)} />;
};

// import { getViewParams as getViewParamsScrollable } from '@lib/frontend/core/components/View/_View.scrollable';
// import {
//   type _VirtualizedListPropsModel,
//   type _VirtualizedListRefModel,
// } from '@lib/frontend/core/components/VirtualizedList/_VirtualizedList.models';
// import { type RSFCPropsModel } from '@lib/frontend/core/core.models';
// import { useTheme } from '@lib/frontend/style/hooks/useTheme/useTheme';
// import { type WithIdModel } from '@lib/shared/core/utils/withId/withId.models';
// import { FlashList, type FlashListProps } from '@shopify/flash-list';
// import { type ReactElement } from 'react';
// import { useImperativeHandle, useRef } from 'react';
// import { type ScrollView, type ScrollViewProps } from 'react-native';

// const _FlashList = <TType extends WithIdModel>({
//   ref,
//   ...props
// }: RSFCPropsModel<_VirtualizedListRefModel, FlashListProps<TType>>): ReactElement<
//   RSFCPropsModel<_VirtualizedListRefModel, FlashListProps<TType>>
// > => {
//   const refF = useRef<FlashList<TType>>(null);
//   useImperativeHandle(ref, () => ({
//     scrollTo: ({ isAnimated, x, y }) =>
//       (refF.current?.getScrollableNode() as unknown as ScrollView).scrollTo({
//         animated: isAnimated,
//         x,
//         y,
//       }),
//   }));
//   return (
//     <FlashList
//       {...props}
//       ref={refF}
//     />
//   );
// };

// const viewParams = getViewParamsScrollable<
//   _VirtualizedListPropsModel<WithIdModel>,
//   FlashListProps<WithIdModel> & ScrollViewProps,
//   _VirtualizedListRefModel
// >({
//   Component: _FlashList,
//   getProps: ({ divider, isHorizontal, items, render, ...props }) =>
//     ({
//       ...props,
//       ItemSeparatorComponent: divider ? () => divider : undefined,
//       data: items,
//       horizontal: isHorizontal,
//       keyExtractor: ({ id }) => id,
//       onScroll: undefined,
//       renderItem: ({ index, item }) => render(item, index),
//     }) as FlashListProps<WithIdModel> & ScrollViewProps,
// });

// export const _VirtualizedList = <TType extends WithIdModel>({
//   ...props
// }: RSFCPropsModel<_VirtualizedListRefModel, _VirtualizedListPropsModel<TType>>): ReactElement<
//   RSFCPropsModel<_VirtualizedListRefModel, _VirtualizedListPropsModel<TType>>
// > => {
//   const theme = useTheme();
//   const { Component, getProps } = viewParams;
//   return <Component {...getProps?.({ ...props }, theme)} />;
// };
