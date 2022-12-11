import type { AnimatablePropsModel } from '@lib/frontend/animation/components/Animatable/Animatable.models';
import type { ANIMATION_TYPE } from '@lib/frontend/animation/hooks/useAnimation/useAnimation.constants';
import type { StyleModel } from '@lib/frontend/style/style.models';

export type AnimationTypeModel = `${ANIMATION_TYPE}`;

export type UseAnimationParamsModel = {
  duration?: number;
  isLazy?: boolean;
  isVisible?: boolean;
} & (
  | {
      from?: StyleModel;
      isScalable?: never;
      to?: StyleModel;
      type?: never;
      width?: never;
    }
  | {
      from?: never;
      isScalable?: boolean;
      to?: never;
      type?: typeof ANIMATION_TYPE.APPEAR;
      width?: never;
    }
  | {
      from?: never;
      isScalable?: never;
      to?: never;
      type?: typeof ANIMATION_TYPE.SLIDE;
      width?: number;
    }
);

export interface UseAnimationModel {
  animation: AnimatablePropsModel;
  isAnimating?: boolean;
  isRender?: boolean;
}
