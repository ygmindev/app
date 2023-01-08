import type { AnimationModel } from '@lib/frontend/animation/animation.models';
import type { AnimationTypeModel } from '@lib/frontend/animation/hooks/useAnimation/useAnimation.models';
import type { MeasureModel } from '@lib/frontend/core/core.models';
import type { StyleModel } from '@lib/frontend/style/style.models';

export enum ANIMATION_TYPE {
  SCALE = 'SCALE',
  SLIDE = 'SLIDE',
  VISIBLE = 'APPEAR',
}

export const ANIMATIONS: Record<
  AnimationTypeModel,
  (measure?: MeasureModel) => AnimationModel<StyleModel> | undefined
> = {
  [ANIMATION_TYPE.VISIBLE]: () => ({
    from: { opacity: 0 },
    to: { opacity: 1 },
  }),
  [ANIMATION_TYPE.SCALE]: () => ({
    from: { transform: [{ scale: 0.9 }] },
    to: { transform: [{ scale: 1.0 }] },
  }),
  [ANIMATION_TYPE.SLIDE]: (measure) =>
    measure && measure.width
      ? { exit: { left: -measure.width }, from: { left: measure.width }, to: { left: 0 } }
      : undefined,
};
