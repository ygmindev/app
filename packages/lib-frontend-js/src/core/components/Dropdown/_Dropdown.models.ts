import { type DIRECTION } from '@lib/frontend/core/core.constants';
import { type ChildrenPropsModel } from '@lib/frontend/core/core.models';
import { type ReactNode } from 'react';

export type _DropdownPropsModel = ChildrenPropsModel & {
  anchor: ReactNode;
  delay: number;
  direction?: DIRECTION;
  isFullWidth?: boolean;
  isOpen?: boolean;
  maxHeight: number;
  maxWidth: number;
  // offset: number;
  onToggle(params?: boolean): void;
};
