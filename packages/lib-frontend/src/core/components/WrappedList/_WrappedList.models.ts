import { type ReactElement } from 'react';

export type _WrappedListPropsModel<TType extends unknown> = {
  data?: Array<TType>;

  element(item: TType): ReactElement;

  margin: number;
};
