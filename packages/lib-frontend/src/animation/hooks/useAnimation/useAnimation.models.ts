import type { ANIMATION_TYPE } from '@lib/frontend/animation/hooks/useAnimation/useAnimation.constants';
import type { WithAnimationPropsModel } from '@lib/frontend/core/decorators/withAnimationProps/withAnimationProps.models';
import type { StyleModel } from '@lib/frontend/styling/styling.models';

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
  animation: WithAnimationPropsModel;
  isAnimating?: boolean;
  isRender?: boolean;
}
