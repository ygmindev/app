import type { AnimationModel } from '@lib/frontend/animation/animation.models';
import type { ANIMATION_TYPE } from '@lib/frontend/animation/hooks/useAnimation/useAnimation.constants';
import type { MeasureModel } from '@lib/frontend/core/core.models';
import type { StyleModel, ViewStyleModel } from '@lib/frontend/style/style.models';

export type AnimationTypeModel = `${ANIMATION_TYPE}`;

export interface UseAnimationParamsModel<TStyle extends StyleModel = ViewStyleModel> {
  duration?: number;
  from?: TStyle;
  isLazy?: boolean;
  isVisible?: boolean;
  measure?: MeasureModel;
  to?: TStyle;
  types?: Array<AnimationTypeModel>;
}

export interface UseAnimationModel<TStyle extends StyleModel = ViewStyleModel> {
  animation: AnimationModel<TStyle>;
  isAnimating?: boolean;
  isRender?: boolean;
}
