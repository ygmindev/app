import { type _DraggableListPropsModel } from '@lib/frontend/core/components/DraggableList/_DraggableList.models';
import { type ReactElement } from 'react';

export type DraggableListPropsModel<TType> = Omit<
  _DraggableListPropsModel<TType>,
  'anchor' | 'render' | 'spacing'
> & {
  element(params: { isActive?: boolean; item: TType }, i: number): ReactElement;
};
