import { type ELEMENT_STATE } from '#lib-frontend/core/core.constants';
import {
  type ElementStateModel,
  type ElementStatePropsModel,
} from '#lib-frontend/core/core.models';
import {
  type StyleModel,
  type StylePropsModel,
  type ViewStyleModel,
} from '#lib-frontend/style/style.models';
import { type CallableModel } from '#lib-shared/core/core.models';

export type AnimationModel<
  TStyle extends StyleModel = ViewStyleModel,
  TStates extends AnimationStatesModel<TStyle> = AnimationStatesModel<TStyle>,
> = {
  delay?: number;
  duration?: number;
  isInfinite?: boolean;
  isInitial?: boolean;
  onEnd?: CallableModel;
  states?: TStates;
};

export type AnimatableRefModel<TStyle extends StyleModel = ViewStyleModel> = {
  to(params: TStyle): void;
  toState(params: ElementStateModel): void;
};

export type AnimationStatesModel<TStyle extends StyleModel = ViewStyleModel> = {
  [TKey in ELEMENT_STATE]?: TStyle;
};

export type AnimatablePropsModel<TStyle extends StyleModel = ViewStyleModel> = {
  animation?: AnimationModel<TStyle>;
} & ElementStatePropsModel &
  StylePropsModel<TStyle>;
