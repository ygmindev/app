import { getViewParams as getViewParamsScrollable } from '@lib/frontend/core/components/View/_View.scrollable';
import {
  type _VirtualizedListPropsModel,
  type _VirtualizedListRefModel,
} from '@lib/frontend/core/components/VirtualizedList/_VirtualizedList.models';
import { type RSFCPropsModel } from '@lib/frontend/core/core.models';
import { useTheme } from '@lib/frontend/style/hooks/useTheme/useTheme';
import { type WithIdModel } from '@lib/shared/core/utils/withId/withId.models';
import { type ReactElement, useCallback } from 'react';
import { useImperativeHandle, useRef } from 'react';
import { FlatList, type FlatListProps, type ScrollView } from 'react-native';

const _FlatList = <TType extends WithIdModel>({
  maxHeight,
  ref,
  ...props
}: RSFCPropsModel<
  _VirtualizedListRefModel,
  FlatListProps<TType> & { maxHeight?: number }
>): ReactElement<
  RSFCPropsModel<_VirtualizedListRefModel, FlatListProps<TType> & { maxHeight?: number }>
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
      style={{ maxHeight }}
    />
  );
};

const viewParams = getViewParamsScrollable<
  Omit<_VirtualizedListPropsModel<WithIdModel>, 'render'> & {
    renderItem: FlatListProps<WithIdModel>['renderItem'];
  },
  FlatListProps<WithIdModel> & { maxHeight?: number },
  _VirtualizedListRefModel
>({
  Component: _FlatList,
  getProps: ({ divider, isHorizontal, itemSize, items, maxHeight, renderItem, ...props }) => ({
    ...props,
    ItemSeparatorComponent: divider ? () => divider : undefined,
    data: items,
    getItemLayout: itemSize
      ? (data, index) => ({ index, length: itemSize, offset: itemSize * index })
      : undefined,
    horizontal: isHorizontal,
    keyExtractor: ({ id }) => id,
    maxHeight,
    onScroll: undefined,
    removeClippedSubviews: true,
    renderItem,
  }),
});

export const _VirtualizedList = <TType extends WithIdModel>({
  render,
  ...props
}: RSFCPropsModel<_VirtualizedListRefModel, _VirtualizedListPropsModel<TType>>): ReactElement<
  RSFCPropsModel<_VirtualizedListRefModel, _VirtualizedListPropsModel<TType>>
> => {
  const theme = useTheme();
  const { Component, getProps } = viewParams;
  const renderItem = useCallback(
    ({ index, item }: { index: number; item: WithIdModel }) => render(item as TType, index),
    [render],
  );
  return <Component {...getProps?.({ ...props, renderItem }, theme)} />;
};
