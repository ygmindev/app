import {
  type UseAnimationPropsModel,
  type UseAnimationPropsParamsModel,
} from '@lib/frontend/animation/hooks/useAnimationProps/useAnimationProps.models';
import { ELEMENT_STATE } from '@lib/frontend/core/core.constants';
import { useTheme } from '@lib/frontend/style/hooks/useTheme/useTheme';
import { type StyleModel, type ViewStyleModel } from '@lib/frontend/style/style.models';
import isNil from 'lodash/isNil';

export const useAnimationProps = <TStyle extends StyleModel = ViewStyleModel>({
  animation,
  defaultState,
  elementState,
}: UseAnimationPropsParamsModel<TStyle>): UseAnimationPropsModel<TStyle> => {
  const theme = useTheme();
  const {
    animate,
    delay,
    duration = animation?.duration ?? theme.animation.effect,
    isInitial = true,
    repeat,
    states,
  } = animation ?? {};
  const from = isInitial ? states?.[defaultState ?? ELEMENT_STATE.INACTIVE] : false;
  const to = animate ?? states?.[elementState ?? ELEMENT_STATE.ACTIVE];
  return {
    exit: states?.[ELEMENT_STATE.EXIT],
    from,
    to,
    transition: {
      delay: isNil(delay) ? delay : delay / 1000.0,
      duration: isNil(duration) ? duration : duration / 1000.0,
      repeat,
    },
  };
};
