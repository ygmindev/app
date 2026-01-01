import { type ELEMENT_STATE } from '@lib/frontend/core/core.constants';
import { type ElementStatePropsModel } from '@lib/frontend/core/core.models';
import {
  type StyleModel,
  type StylePropsModel,
  type ViewStyleModel,
} from '@lib/frontend/style/style.models';

export type AnimationModel<
  TStyle extends StyleModel = ViewStyleModel,
  TStates extends AnimationStatesModel<TStyle> = AnimationStatesModel<TStyle>,
> = {
  animate?: TStyle;
  delay?: number;
  duration?: number;
  isInitial?: boolean;
  repeat?: number;
  states?: TStates;
  onEnd?(): void;
};

export type AnimationStatesModel<TStyle extends StyleModel = ViewStyleModel> = {
  [TKey in ELEMENT_STATE]?: TStyle;
};

export type AnimatablePropsModel<TStyle extends StyleModel = ViewStyleModel> =
  StylePropsModel<TStyle> &
    ElementStatePropsModel & {
      animation?: AnimationModel<TStyle>;
    };
