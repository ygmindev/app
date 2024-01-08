import { type ReactElement } from 'react';

import { type _DraggableListPropsModel } from '#lib-frontend/core/components/DraggableList/_DraggableList.models';

export type DraggableListPropsModel<TType> = Omit<
  _DraggableListPropsModel<TType>,
  'anchor' | 'render' | 'spacing'
> & {
  element(params: { isActive?: boolean; item: TType }, i: number): ReactElement;
};
