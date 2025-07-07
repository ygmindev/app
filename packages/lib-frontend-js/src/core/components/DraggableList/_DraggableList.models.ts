import { type ValuePropsModel } from '@lib/frontend/data/data.models';
import { type ReactElement } from 'react';

export type _DraggableListPropsModel<TType> = ValuePropsModel<Array<TType>> & {
  spacing: number;
  anchor(isActive: boolean): ReactElement;
  render(params: {
    anchor?: ReactElement;
    i: number;
    isActive?: boolean;
    item: TType;
  }): ReactElement;
};
