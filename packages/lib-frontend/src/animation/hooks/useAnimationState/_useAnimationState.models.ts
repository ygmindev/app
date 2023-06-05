import type {
  AnimatablePropsModel,
  AnimatableRefModel,
} from '@lib/frontend/animation/animation.models';
import type { RefPropsModel } from '@lib/frontend/core/core.models';
import type { StyleModel, ViewStyleModel } from '@lib/frontend/style/style.models';
import type { TestIdPropsModel } from '@lib/frontend/test/test.models';
import type { MotiProps, UseDynamicAnimationState } from 'moti';

export interface _UseAnimationStateParamsModel<TStyle extends StyleModel = ViewStyleModel>
  extends RefPropsModel<AnimatableRefModel>,
    AnimatablePropsModel<TStyle>,
    TestIdPropsModel {}

export interface _UseAnimationStateModel<TStyle extends StyleModel = ViewStyleModel>
  extends AnimatableRefModel<TStyle> {
  animationProps: MotiProps<TStyle>;
  animationState: UseDynamicAnimationState;
  current?: TStyle;
  isRender: boolean;
}
