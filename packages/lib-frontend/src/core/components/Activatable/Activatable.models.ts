import type { ChildrenPropsModel } from '@lib/frontend/core/core.models';
import type { CallableModel } from '@lib/shared/core/core.models';
import type { ReactElement } from 'react';

export interface ActivatablePropsModel
  extends ChildrenPropsModel<(isActive?: boolean) => ReactElement> {
  isHoverable?: boolean;
  onActive?: CallableModel;
  onInactive?: CallableModel;
}
