import {
  type _UseAnimationStateModel,
  type _UseAnimationStateParamsModel,
} from '@lib/frontend/animation/hooks/useAnimationState/_useAnimationState.models';
import { type StyleModel, type ViewStyleModel } from '@lib/frontend/style/style.models';

export type UseAnimationStateParamsModel<TStyle extends StyleModel = ViewStyleModel> =
  _UseAnimationStateParamsModel<TStyle>;

export type UseAnimationStateModel<TStyle extends StyleModel = ViewStyleModel> =
  _UseAnimationStateModel<TStyle>;
