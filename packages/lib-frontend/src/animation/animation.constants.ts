import { type AnimationStatesModel } from '#lib-frontend/animation/animation.models';
import { type SlidePropsModel } from '#lib-frontend/animation/components/Slide/Slide.models';
import { ELEMENT_STATE } from '#lib-frontend/core/core.constants';
import { THEME_COLOR, THEME_ROLE, THEME_SIZE } from '#lib-frontend/style/style.constants';
import { type StyleModel, type ThemeModel } from '#lib-frontend/style/style.models';
import { merge } from '#lib-shared/core/utils/merge/merge';

export const ANIMATION_STATES_APPEARABLE: AnimationStatesModel<StyleModel> = {
  [ELEMENT_STATE.ACTIVE]: { opacity: 1 },
  [ELEMENT_STATE.INACTIVE]: { opacity: 0 },
  [ELEMENT_STATE.EXIT]: { opacity: 0 },
};

export const ANIMATION_STATES_APPEARABLE_OPAQUE: AnimationStatesModel<StyleModel> = {
  [ELEMENT_STATE.ACTIVE]: { opacity: 0.5 },
  [ELEMENT_STATE.INACTIVE]: { opacity: 0 },
  [ELEMENT_STATE.EXIT]: { opacity: 0 },
};

export const ANIMATION_STATES_SCALABLE: AnimationStatesModel<StyleModel> = {
  [ELEMENT_STATE.ACTIVE]: { transform: [{ scale: 1.0 }] },
  [ELEMENT_STATE.INACTIVE]: { transform: [{ scale: 0.9 }] },
  [ELEMENT_STATE.EXIT]: { transform: [{ scale: 0.9 }] },
};

export const ANIMATION_STATES_APPEAR_SCALABLE: AnimationStatesModel<StyleModel> = merge([
  ANIMATION_STATES_SCALABLE,
  ANIMATION_STATES_APPEARABLE,
]);

export const ANIMATION_STATES_SLIDABLE_HORIZONTAL = ({
  isBack = false,
  width,
}: { width?: number } & Pick<SlidePropsModel, 'isBack'>): AnimationStatesModel<StyleModel> => ({
  [ELEMENT_STATE.ACTIVE]: { left: 0 },
  [ELEMENT_STATE.INACTIVE]: width ? (isBack ? { left: -width } : { left: width }) : { left: 0 },
  [ELEMENT_STATE.EXIT]: width ? (isBack ? { left: width } : { left: -width }) : { left: 0 },
});

export const ANIMATION_STATES_SLIDABLE_VERTICAL = ({
  height,
}: {
  height?: number;
}): AnimationStatesModel<StyleModel> => ({
  [ELEMENT_STATE.ACTIVE]: { bottom: 0 },
  [ELEMENT_STATE.INACTIVE]: height ? { bottom: -height } : { bottom: 0 },
});

export const ANIMATION_STATES_FOCUSABLE = ({
  isError,
  isText,
  theme,
}: {
  isError?: boolean;
  isText?: boolean;
  theme: ThemeModel;
}): AnimationStatesModel<StyleModel> => {
  const activeColor = isError
    ? theme.color.palette[THEME_COLOR.ERROR][THEME_ROLE.MAIN]
    : theme.color.palette[THEME_COLOR.PRIMARY][THEME_ROLE.MAIN];
  const inactiveColor = isError
    ? theme.color.palette[THEME_COLOR.ERROR][THEME_ROLE.MAIN]
    : theme.color.border;
  const colorField = isText ? 'color' : 'borderColor';
  return {
    [ELEMENT_STATE.INACTIVE]: { [colorField]: inactiveColor, opacity: 1.0 },
    [ELEMENT_STATE.ACTIVE]: { [colorField]: activeColor, opacity: 1.0 },
    [ELEMENT_STATE.DISABLED]: {
      [colorField]: activeColor,
      opacity: theme.opaque[THEME_SIZE.LARGE],
    },
    [ELEMENT_STATE.LOADING]: { [colorField]: activeColor, opacity: theme.opaque[THEME_SIZE.LARGE] },
  };
};
