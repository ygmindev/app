import { type ChildrenPropsModel, type DirectionModel } from '@lib/frontend/core/core.models';
import { type ReactNode } from 'react';

export type _DropdownPropsModel = ChildrenPropsModel & {
  anchor: ReactNode;
  delay: number;
  direction?: DirectionModel;
  isDismiss?: boolean;
  isFullWidth?: boolean;
  isOpen?: boolean;
  maxHeight: number;
  maxWidth: number;
  offset: number;
  onToggle(params?: boolean): void;
};
