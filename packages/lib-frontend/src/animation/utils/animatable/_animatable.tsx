import type {
  _AnimatableModel,
  _AnimatableParamsModel,
} from '@lib/frontend/animation/utils/animatable/_animatable.models';
import { getAnimatableProps } from '@lib/frontend/animation/utils/getAnimatableProps/getAnimatableProps';
import type { PropsModel } from '@lib/frontend/core/core.models';
import { useTheme } from '@lib/frontend/style/hooks/useTheme/useTheme';
import type { StyleModel, StylePropsModel, ViewStyleModel } from '@lib/frontend/style/style.models';
import { motify } from 'moti';
import { createElement } from 'react';

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
      ...(animation ? getAnimatableProps<TStyle>(animation, theme) : {}),
    } as PropsModel<typeof _Component>);
  };
  return _Animatable;
};
