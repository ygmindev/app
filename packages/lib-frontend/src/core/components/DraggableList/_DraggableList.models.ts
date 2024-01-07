import { type ReactElement } from 'react';

import { type ValuePropsModel } from '#lib-frontend/data/data.models';

export type _DraggableListPropsModel<TType> = ValuePropsModel<Array<TType>> & {
  anchor(isActive: boolean): ReactElement;
  render(params: { anchor?: ReactElement; isActive?: boolean; item: TType }): ReactElement;
  spacing: number;
};
