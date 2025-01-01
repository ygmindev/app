import { getViewParams as getViewParamsScrollable } from '@lib/frontend/core/components/View/_View.scrollable';
import {
  type _VirtualizedListPropsModel,
  type _VirtualizedListRefModel,
} from '@lib/frontend/core/components/VirtualizedList/_VirtualizedList.models';
import { type RLFCPropsModel } from '@lib/frontend/core/core.models';
import { composeComponent } from '@lib/frontend/core/utils/composeComponent/composeComponent';
import { type WithIdModel } from '@lib/shared/core/utils/withId/withId.models';
import { type ReactElement } from 'react';
import { forwardRef, useImperativeHandle, useRef } from 'react';
import { FlatList, type FlatListProps, type ScrollView } from 'react-native';

const viewParamsScrollable = getViewParamsScrollable<
  _VirtualizedListPropsModel<WithIdModel>,
  FlatListProps<WithIdModel>,
  _VirtualizedListRefModel
>({
  Component: forwardRef<_VirtualizedListRefModel, FlatListProps<WithIdModel>>((props, ref) => {
    const refF = useRef<FlatList>(null);

    useImperativeHandle(ref, () => ({
      scrollTo: (position) =>
        (refF.current?.getScrollableNode() as ScrollView).scrollTo({
          ...position,
          animated: false,
        }),
    }));

    return (
      <FlatList
        {...props}
        ref={refF}
      />
    );
  }),

  getProps: ({ divider, isHorizontal, items, render }) => ({
    ItemSeparatorComponent: divider ? () => divider : undefined,
    data: items,
    horizontal: isHorizontal,
    keyExtractor: ({ id }) => id,
    renderItem: ({ index, item }) => render(item, index),
    scrollEnabled: true,
  }),
});

export const _VirtualizedList = composeComponent(viewParamsScrollable) as <
  TType extends WithIdModel,
>(
  props: RLFCPropsModel<_VirtualizedListRefModel, _VirtualizedListPropsModel<TType>>,
) => ReactElement<RLFCPropsModel<_VirtualizedListRefModel, _VirtualizedListPropsModel<TType>>>;
