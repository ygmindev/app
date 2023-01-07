import type { StyleModel, ViewStyleModel } from '@lib/frontend/style/style.models';
import type { CallableModel } from '@lib/shared/core/core.models';

export interface AnimationModel<TStyle extends StyleModel = ViewStyleModel> {
  delay?: number;
  duration?: number;
  exit?: TStyle;
  from?: TStyle;
  isActive?: boolean;
  isInfinite?: boolean;
  onEnd?: CallableModel;
  to?: TStyle;
}

export interface AnimatablePropsModel<TStyle extends StyleModel = ViewStyleModel> {
  animation?: AnimationModel<TStyle>;
}
