import { MasonryInfiniteGrid } from '@egjs/react-infinitegrid';
import { type _WrappedListPropsModel } from '@lib/frontend/core/components/WrappedList/_WrappedList.models';
import { type ReactElement } from 'react';

export const _WrappedList = <TType extends unknown>({
  data,
  element,
  margin,
}: _WrappedListPropsModel<TType>): ReactElement<_WrappedListPropsModel<TType>> => (
  <MasonryInfiniteGrid
    align="center"
    gap={margin}>
    {data?.map(element)}
  </MasonryInfiniteGrid>
);
