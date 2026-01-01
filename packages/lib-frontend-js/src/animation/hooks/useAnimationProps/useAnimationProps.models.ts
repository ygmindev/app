import { type AnimatablePropsModel } from '@lib/frontend/animation/animation.models';
import { type StyleModel, type ViewStyleModel } from '@lib/frontend/style/style.models';
import { type TestIdPropsModel } from '@lib/frontend/test/test.models';

export type UseAnimationPropsParamsModel<TStyle extends StyleModel = ViewStyleModel> =
  AnimatablePropsModel<TStyle> & TestIdPropsModel;

export type UseAnimationPropsModel<TStyle extends StyleModel = ViewStyleModel> = {
  exit?: TStyle;
  from?: TStyle | false;
  to?: TStyle;
  transition?: {
    delay?: number;
    duration?: number;
    repeat?: number;
  };
};
