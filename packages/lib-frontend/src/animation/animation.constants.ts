import type { AnimationStatesModel } from '@lib/frontend/animation/animation.models';
import { ELEMENT_STATE } from '@lib/frontend/core/core.constants';
import type { MeasureModel } from '@lib/frontend/core/core.models';
import type { StyleModel } from '@lib/frontend/style/style.models';

export const ANIMATION_STATES_APPEAR: AnimationStatesModel<StyleModel> = {
  [ELEMENT_STATE.ACTIVE]: { opacity: 1 },
  [ELEMENT_STATE.INVISIBLE]: { opacity: 0 },
};

export const ANIMATION_STATES_SCALE: AnimationStatesModel<StyleModel> = {
  [ELEMENT_STATE.ACTIVE]: { transform: [{ scale: 1.0 }] },
  [ELEMENT_STATE.INVISIBLE]: { transform: [{ scale: 0.9 }] },
};

export const ANIMATION_STATES_SLIDE_RIGHT = (
  measure?: MeasureModel,
): AnimationStatesModel<StyleModel> =>
  measure && measure.width
    ? {
        [ELEMENT_STATE.ACTIVE]: { left: 0 },
        [ELEMENT_STATE.INVISIBLE]: { left: -measure.width },
        [ELEMENT_STATE.INACTIVE]: { left: measure.width },
      }
    : {};
