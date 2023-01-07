import type {
  _AnimatableModel,
  _AnimatableParamsModel,
} from '@lib/frontend/animation/utils/animatable/_animatable.models';
import type { StyleModel, StylePropsModel, ViewStyleModel } from '@lib/frontend/style/style.models';

export interface AnimatableParamsModel<
  TProps extends StylePropsModel<TStyle>,
  TStyle extends StyleModel = ViewStyleModel,
> extends _AnimatableParamsModel<TProps, TStyle> {}

export type AnimatableModel<TProps, TStyle extends StyleModel = ViewStyleModel> = _AnimatableModel<
  TProps,
  TStyle
>;
