import type { ChildrenPropsModel } from '@lib/frontend/core/core.models';
import type { CallableModel } from '@lib/shared/core/core.models';
import type { ReactNode } from 'react';

export interface _DropdownPropsModel extends ChildrenPropsModel {
  anchor: ReactNode;
  isFullWidth?: boolean;
  isLeft?: boolean;
  isOpen?: boolean;
  isRight?: boolean;
  isTop?: boolean;
  maxWidth?: number;
  onClose?: CallableModel;
}
