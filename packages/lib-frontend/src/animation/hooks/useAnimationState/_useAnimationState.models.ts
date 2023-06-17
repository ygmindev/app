import type { MotiProps, UseDynamicAnimationState } from 'moti';

import type {
  AnimatablePropsModel,
  AnimatableRefModel,
} from '#lib-frontend/animation/animation.models';
import type { RefPropsModel } from '#lib-frontend/core/core.models';
import type { StyleModel, ViewStyleModel } from '#lib-frontend/style/style.models';
import type { TestIdPropsModel } from '#lib-frontend/test/test.models';

export type _UseAnimationStateParamsModel<TStyle extends StyleModel = ViewStyleModel> =
  RefPropsModel<AnimatableRefModel> & AnimatablePropsModel<TStyle> & TestIdPropsModel;

export type _UseAnimationStateModel<TStyle extends StyleModel = ViewStyleModel> = {
  animationProps: MotiProps<TStyle>;
  animationState: UseDynamicAnimationState;
  current?: TStyle;
} & AnimatableRefModel<TStyle>;
