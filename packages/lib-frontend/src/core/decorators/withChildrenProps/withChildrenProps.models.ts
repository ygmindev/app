import type { ReactNode } from 'react';

export interface WithChildrenPropsModel<TType = ReactNode | Array<ReactNode>> {
  children?: TType;
}
