import type { ElementStateModel, ElementStatePropsModel } from '@lib/frontend/core/core.models';
import type { StyleModel, StylePropsModel, ViewStyleModel } from '@lib/frontend/style/style.models';
import type { CallableModel } from '@lib/shared/core/core.models';

export interface AnimationModel<
  TStyle extends StyleModel = ViewStyleModel,
  TStates extends AnimationStatesModel<TStyle> = AnimationStatesModel<TStyle>,
> {
  delay?: number;
  duration?: number;
  isInfinite?: boolean;
  isInitial?: boolean;
  isLazy?: boolean;
  onEnd?: CallableModel;
  states?: TStates;
}

export interface AnimatableRefModel<TStyle extends StyleModel = ViewStyleModel> {
  to(params: TStyle): Promise<void>;
  toState(params: ElementStateModel): Promise<void>;
}

export type AnimationStatesModel<TStyle extends StyleModel = ViewStyleModel> = {
  [TKey in ElementStateModel]?: TStyle;
};

export interface AnimatablePropsModel<TStyle extends StyleModel = ViewStyleModel>
  extends ElementStatePropsModel,
    StylePropsModel<TStyle> {
  animation?: AnimationModel<TStyle>;
}
