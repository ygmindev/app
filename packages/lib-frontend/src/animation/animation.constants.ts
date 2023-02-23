import type { AnimationStatesModel } from '@lib/frontend/animation/animation.models';
import type { SlidePropsModel } from '@lib/frontend/animation/components/Slide/Slide.models';
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

export const ANIMATION_STATES_SLIDABLE = ({
  isBack = false,
  measure,
}: { measure?: MeasureModel } & Pick<
  SlidePropsModel,
  'isBack'
>): AnimationStatesModel<StyleModel> => ({
  [ELEMENT_STATE.ACTIVE]: { left: 0 },
  [ELEMENT_STATE.INACTIVE]:
    measure && measure.width
      ? isBack
        ? { left: -measure.width }
        : { left: measure.width }
      : { left: 0 },
  [ELEMENT_STATE.EXIT]:
    measure && measure.width
      ? isBack
        ? { left: measure.width }
        : { left: -measure.width }
      : { left: 0 },
});
