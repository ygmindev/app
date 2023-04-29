import type { ChildrenPropsModel, DirectionModel } from '@lib/frontend/core/core.models';
import type { ReactNode } from 'react';

export interface _DropdownPropsModel extends ChildrenPropsModel {
  anchor: ReactNode;
  direction?: DirectionModel;
  isFullWidth?: boolean;
  isOpen?: boolean;
  maxWidth?: number;
  onToggle(value?: boolean): void;
}
