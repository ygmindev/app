import type { AnimationModel } from '@lib/frontend/animation/animation.models';
import type { ANIMATION_TYPE } from '@lib/frontend/animation/hooks/useAnimation/useAnimation.constants';
import type { MeasureModel } from '@lib/frontend/core/core.models';
import type { StyleModel } from '@lib/frontend/style/style.models';

export type AnimationTypeModel = `${ANIMATION_TYPE}`;

export interface UseAnimationParamsModel {
  duration?: number;
  from?: StyleModel;
  isLazy?: boolean;
  isVisible?: boolean;
  measure?: MeasureModel;
  to?: StyleModel;
  types?: Array<AnimationTypeModel>;
}

export interface UseAnimationModel {
  animation: AnimationModel;
  isAnimating?: boolean;
  isRender?: boolean;
}
