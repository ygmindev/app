import type { WithChildrenPropsModel } from '@lib/frontend/core/decorators/withChildrenProps/withChildrenProps.models';
import type { CallableModel } from '@lib/shared/core/core.models';
import type { ReactNode } from 'react';

export interface _DropdownPropsModel extends WithChildrenPropsModel {
  anchor: ReactNode;
  isFullWidth?: boolean;
  isLeft?: boolean;
  isOpen?: boolean;
  isRight?: boolean;
  isTop?: boolean;
  maxWidth?: number;
  onClose?: CallableModel;
}
