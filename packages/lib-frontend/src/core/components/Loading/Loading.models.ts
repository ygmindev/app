import { type AnimatablePropsModel } from '#lib-frontend/animation/animation.models';
import { type TextStyleModel, type ThemeSizeModel } from '#lib-frontend/style/style.models';
import { type ColorStylerParamsModel } from '#lib-frontend/style/utils/styler/colorStyler/colorStyler.models';

export type LoadingPropsModel = AnimatablePropsModel<TextStyleModel> &
  ColorStylerParamsModel & {
    size?: ThemeSizeModel;
  };
