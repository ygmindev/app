import type {
  AnimatablePropsModel,
  AnimatableRefModel,
} from '@lib/frontend/animation/animation.models';
import type { RefPropsModel } from '@lib/frontend/core/core.models';
import type { StyleModel, ViewStyleModel } from '@lib/frontend/style/style.models';
import type { MotiProps, UseAnimationState, Variants } from 'moti';

export interface _UseAnimationStateParamsModel<TStyle extends StyleModel = ViewStyleModel>
  extends RefPropsModel<AnimatableRefModel>,
    AnimatablePropsModel<TStyle> {}

export interface _UseAnimationStateModel<TStyle extends StyleModel = ViewStyleModel> {
  animationProps: MotiProps<TStyle>;
  animationState: UseAnimationState<Variants<TStyle>>;
  isRender: boolean;
}
