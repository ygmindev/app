import type {
  AnimatablePropsModel,
  AnimationModel,
} from '@lib/frontend/animation/animation.models';
import type { _AnimatableParamsModel } from '@lib/frontend/animation/utils/animatable/_animatable.models';
import type { PropsModel, SFCModel } from '@lib/frontend/core/core.models';
import type { WithStyleModel } from '@lib/frontend/style/decorators/withStyle/withStyle.models';
import { useTheme } from '@lib/frontend/style/hooks/useTheme/useTheme';
import type { UseThemeModel } from '@lib/frontend/style/hooks/useTheme/useTheme.models';
import type { MotiProps } from 'moti';
import { motify } from 'moti';
import { createElement } from 'react';

export const _getAnimatableProps = (
  { delay, duration, from, isInfinite, onEnd, to }: AnimationModel,
  theme: UseThemeModel,
): MotiProps =>
  ({
    animate: to,
    from,
    loop: isInfinite,
    onDidAnimate: onEnd,
    transition: { delay, duration: duration || theme.animation.duration, type: 'timing' },
  } as MotiProps);

export const _animatable = <TProps extends WithStyleModel>({
  Component,
}: _AnimatableParamsModel<TProps>): SFCModel<TProps & AnimatablePropsModel> => {
  const _Component = motify(Component)();
  const _Animatable: SFCModel<TProps & AnimatablePropsModel> = ({ animation, ...props }) => {
    const theme = useTheme();
    return createElement(_Component, {
      ...props,
      ...(animation ? _getAnimatableProps(animation, theme) : {}),
    } as PropsModel<typeof _Component>);
  };
  return _Animatable;
};
