import type { ReactNode } from 'react';

import type { ChildrenPropsModel, DirectionModel } from '#lib-frontend/core/core.models';

export interface _DropdownPropsModel extends ChildrenPropsModel {
  anchor: ReactNode;
  direction?: DirectionModel;
  isFullWidth?: boolean;
  isOpen?: boolean;
  maxWidth?: number;
  onToggle(value?: boolean): void;
}
