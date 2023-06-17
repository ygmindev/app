import type { ReactElement } from 'react';

import type { ChildPropsModel } from '#lib-frontend/core/core.models';
import type { CallableModel } from '#lib-shared/core/core.models';

export type ActivatablePropsModel = {
  isHoverable?: boolean;
  isPressable?: boolean;
  onActive?: CallableModel;
  onInactive?: CallableModel;
} & ChildPropsModel<ReactElement | ((isActive?: boolean) => ReactElement)>;
