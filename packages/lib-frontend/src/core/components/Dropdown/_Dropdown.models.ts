import { type ReactNode } from 'react';

import { type ChildrenPropsModel, type DirectionModel } from '#lib-frontend/core/core.models';

export type _DropdownPropsModel = {
  anchor: ReactNode;
  direction?: DirectionModel;
  isFullWidth?: boolean;
  isOpen?: boolean;
  maxWidth?: number;
  onToggle(value?: boolean): void;
} & ChildrenPropsModel;
