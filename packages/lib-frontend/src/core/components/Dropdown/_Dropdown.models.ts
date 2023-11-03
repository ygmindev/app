import { type ReactNode } from 'react';

import { type ChildrenPropsModel, type DirectionModel } from '#lib-frontend/core/core.models';

export type _DropdownPropsModel = ChildrenPropsModel & {
  anchor: ReactNode;
  direction?: DirectionModel;
  isFullWidth?: boolean;
  isOpen?: boolean;
  maxHeight: number;
  maxWidth: number;
  offset: number;
  onToggle(params?: boolean): void;
};
