import { type MotiProps, type UseDynamicAnimationState } from 'moti';

import {
  type AnimatablePropsModel,
  type AnimatableRefModel,
} from '@lib/frontend/animation/animation.models';
import { type RefPropsModel } from '@lib/frontend/core/core.models';
import { type StyleModel, type ViewStyleModel } from '@lib/frontend/style/style.models';
import { type TestIdPropsModel } from '@lib/frontend/test/test.models';

export type _UseAnimationStateParamsModel<TStyle extends StyleModel = ViewStyleModel> =
  RefPropsModel<AnimatableRefModel> & AnimatablePropsModel<TStyle> & TestIdPropsModel;

export type _UseAnimationStateModel<TStyle extends StyleModel = ViewStyleModel> =
  AnimatableRefModel<TStyle> & {
    animationProps: MotiProps<TStyle>;
    animationState: UseDynamicAnimationState;
  };
