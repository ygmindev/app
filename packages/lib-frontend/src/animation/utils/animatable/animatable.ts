import { _animatable } from '@lib/frontend/animation/utils/animatable/_animatable';
import { type _AnimatableParamsModel } from '@lib/frontend/animation/utils/animatable/_animatable.models';
import { type AnimatableModel } from '@lib/frontend/animation/utils/animatable/animatable.models';
import { type StyleModel, type ViewStyleModel } from '@lib/frontend/style/style.models';

export const animatable = <TProps, TStyle extends StyleModel = ViewStyleModel>(
  params: _AnimatableParamsModel<TProps, TStyle>,
): AnimatableModel<TProps, TStyle> => _animatable<TProps, TStyle>(params);
