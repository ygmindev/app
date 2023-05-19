import type { ChildPropsModel } from '@lib/frontend/core/core.models';
import type { CallableModel } from '@lib/shared/core/core.models';
import type { ReactElement } from 'react';

export interface ActivatablePropsModel
  extends ChildPropsModel<ReactElement | ((isActive?: boolean) => ReactElement)> {
  isHoverable?: boolean;
  isPressable?: boolean;
  onActive?: CallableModel;
  onInactive?: CallableModel;
}
