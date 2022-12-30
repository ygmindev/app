import type { AnimationModel } from '@lib/frontend/animation/animation.models';
import type { AnimationTypeModel } from '@lib/frontend/animation/hooks/useAnimation/useAnimation.models';
import type { MeasureModel } from '@lib/frontend/core/core.models';

export enum ANIMATION_TYPE {
  SCALE = 'SCALE',
  VISIBLE = 'APPEAR',
}

export const ANIMATIONS: Record<AnimationTypeModel, (measure?: MeasureModel) => AnimationModel> = {
  [ANIMATION_TYPE.VISIBLE]: () => ({
    from: { opacity: 0 },
    to: { opacity: 1 },
  }),
  [ANIMATION_TYPE.SCALE]: () => ({
    from: { transform: [{ scale: 0.9 }] },
    to: { transform: [{ scale: 1.0 }] },
  }),
};
