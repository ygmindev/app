import type { WithChildrenPropsModel } from '@lib/frontend/core/decorators/withChildrenProps/withChildrenProps.models';
import type { CallableModel } from '@lib/shared/core/core.models';
import type { ReactElement } from 'react';

export interface ActivatablePropsModel
  extends WithChildrenPropsModel<(isActive?: boolean) => ReactElement> {
  isHoverable?: boolean;
  onActive?: CallableModel;
  onInactive?: CallableModel;
}
