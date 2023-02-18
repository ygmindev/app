import type { AnimationStatesModel } from '@lib/frontend/animation/animation.models';
import { ELEMENT_STATE } from '@lib/frontend/core/core.constants';
import type { MeasureModel } from '@lib/frontend/core/core.models';
import type { StyleModel } from '@lib/frontend/style/style.models';

export const ANIMATION_STATES_APPEARABLE: AnimationStatesModel<StyleModel> = {
  [ELEMENT_STATE.ACTIVE]: { opacity: 1 },
  [ELEMENT_STATE.INACTIVE]: { opacity: 0 },
  [ELEMENT_STATE.EXIT]: { opacity: 0 },
};

export const ANIMATION_STATES_SCALABLE: AnimationStatesModel<StyleModel> = {
  [ELEMENT_STATE.ACTIVE]: { transform: [{ scale: 1.0 }] },
  [ELEMENT_STATE.INACTIVE]: { transform: [{ scale: 0.9 }] },
  [ELEMENT_STATE.EXIT]: { transform: [{ scale: 0.9 }] },
};

export const ANIMATION_STATES_SLIDABLE = (
  measure?: MeasureModel,
  isLeft = false,
): AnimationStatesModel<StyleModel> =>
  measure && measure.width
    ? {
        [ELEMENT_STATE.ACTIVE]: isLeft ? { left: 'auto', right: 0 } : { left: 0, right: 'auto' },
        [ELEMENT_STATE.INACTIVE]: isLeft
          ? { left: 'auto', right: measure.width }
          : { left: measure.width, right: 'auto' },
        [ELEMENT_STATE.EXIT]: isLeft
          ? { left: 'auto', right: -measure.width }
          : { left: -measure.width, right: 'auto' },
      }
    : {};
