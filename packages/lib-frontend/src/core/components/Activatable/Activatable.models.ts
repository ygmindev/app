import type { ReactElement } from 'react';

import { type PressablePropsModel } from '#lib-frontend/core/components/Pressable/Pressable.models';
import type { ChildPropsModel } from '#lib-frontend/core/core.models';
import type { CallableModel } from '#lib-shared/core/core.models';

export type ActivatablePropsModel = {
  isHoverable?: boolean;
  isPressable?: boolean;
  onActive?: CallableModel;
  onInactive?: CallableModel;
} & ChildPropsModel<
  ReactElement<PressablePropsModel> | ((isActive?: boolean) => ReactElement<PressablePropsModel>)
>;
