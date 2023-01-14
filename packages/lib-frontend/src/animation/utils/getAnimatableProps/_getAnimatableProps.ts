import type {
  _GetAnimatablePropsModel,
  _GetAnimatablePropsParamsModel,
} from '@lib/frontend/animation/utils/getAnimatableProps/_getAnimatableProps.models';
import type { StyleModel, ViewStyleModel } from '@lib/frontend/style/style.models';

export const _getAnimatableProps = <TStyle extends StyleModel = ViewStyleModel>(
  ...[animation, theme]: _GetAnimatablePropsParamsModel<TStyle>
): _GetAnimatablePropsModel => {
  const { delay, duration, exit, from, isActive, isInfinite, onEnd, to } = animation;
  return {
    animate: isActive ? to : from,
    exit: exit || from,
    from,
    loop: isInfinite,
    onDidAnimate: onEnd,
    transition: {
      delay,
      duration: duration || theme.animation.duration,
      type: 'timing',
    },
  } as _GetAnimatablePropsModel;
};
