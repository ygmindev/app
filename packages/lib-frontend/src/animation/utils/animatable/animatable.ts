import { _animatable } from '@lib/frontend/animation/utils/animatable/_animatable';
import type { _AnimatableParamsModel } from '@lib/frontend/animation/utils/animatable/_animatable.models';
import type { AnimatableModel } from '@lib/frontend/animation/utils/animatable/animatable.models';
import type { StylePropsModel } from '@lib/frontend/style/style.models';

export const animatable = <TProps extends StylePropsModel>(
  params: _AnimatableParamsModel<TProps>,
): AnimatableModel<TProps> => _animatable(params);
