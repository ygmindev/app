import { type _WrappedListPropsModel } from '@lib/frontend/core/components/WrappedList/_WrappedList.models';
import MasonryList from '@react-native-seoul/masonry-list';
import { type ReactElement } from 'react';

export const _WrappedList = <TType extends unknown>({
  data,
  element,
}: _WrappedListPropsModel<TType>): ReactElement<_WrappedListPropsModel<TType>> => (
  <MasonryList
    data={data ?? []}
    renderItem={({ i, item }) => element()}
  />
);
