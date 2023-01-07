import type { AnimationModel } from '@lib/frontend/animation/animation.models';
import type {
  _AnimatableModel,
  _AnimatableParamsModel,
} from '@lib/frontend/animation/utils/animatable/_animatable.models';
import type { PropsModel } from '@lib/frontend/core/core.models';
import { useTheme } from '@lib/frontend/style/hooks/useTheme/useTheme';
import type { UseThemeModel } from '@lib/frontend/style/hooks/useTheme/useTheme.models';
import type { StyleModel, StylePropsModel, ViewStyleModel } from '@lib/frontend/style/style.models';
import type { MotiProps } from 'moti';
import { motify } from 'moti';
import { createElement } from 'react';

export const _getAnimatableProps = <TStyle extends StyleModel = ViewStyleModel>(
  { delay, duration, exit, from, isActive, isInfinite, onEnd, to }: AnimationModel<TStyle>,
  theme: UseThemeModel,
): MotiProps =>
  ({
    animate: isActive ? to : from,
    exit: exit || from,
    from,
    loop: isInfinite,
    onDidAnimate: onEnd,
    transition: { delay, duration: duration || theme.animation.duration, type: 'timing' },
  } as MotiProps);

export const _animatable = <
  TProps extends StylePropsModel<TStyle>,
  TStyle extends StyleModel = ViewStyleModel,
>({
  Component,
}: _AnimatableParamsModel<TProps, TStyle>): _AnimatableModel<TProps, TStyle> => {
  const _Component = motify(Component)();
  const _Animatable: _AnimatableModel<TProps, TStyle> = ({ animation, ...props }) => {
    const theme = useTheme();
    return createElement(_Component, {
      ...props,
      ...(animation ? _getAnimatableProps<TStyle>(animation, theme) : {}),
    } as PropsModel<typeof _Component>);
  };
  return _Animatable;
};
