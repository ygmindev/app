import type {
  _UseAnimationStateModel,
  _UseAnimationStateParamsModel,
} from '@lib/frontend/animation/hooks/useAnimationState/_useAnimationState.models';
import type { StyleModel, ViewStyleModel } from '@lib/frontend/style/style.models';

export interface UseAnimationStateParamsModel<TStyle extends StyleModel = ViewStyleModel>
  extends _UseAnimationStateParamsModel<TStyle> {}

export type UseAnimationStateModel<TStyle extends StyleModel = ViewStyleModel> =
  _UseAnimationStateModel<TStyle>;
