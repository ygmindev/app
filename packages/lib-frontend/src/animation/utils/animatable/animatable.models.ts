import type {
  _AnimatableModel,
  _AnimatableParamsModel,
} from '@lib/frontend/animation/utils/animatable/_animatable.models';
import type { StylePropsModel } from '@lib/frontend/style/style.models';

export interface AnimatableParamsModel<TProps extends StylePropsModel>
  extends _AnimatableParamsModel<TProps> {}

export type AnimatableModel<TProps> = _AnimatableModel<TProps>;
