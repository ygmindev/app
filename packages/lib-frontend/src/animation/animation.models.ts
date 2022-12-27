import type { StyleModel } from '@lib/frontend/style/style.models';
import type { CallableModel } from '@lib/shared/core/core.models';

export interface AnimationModel {
  delay?: number;
  duration?: number;
  from?: StyleModel;
  isInfinite?: boolean;
  onEnd?: CallableModel;
  to?: StyleModel;
}

export interface AnimatablePropsModel {
  animation?: AnimationModel;
}
