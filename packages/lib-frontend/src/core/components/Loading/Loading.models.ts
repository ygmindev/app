import { type AnimatablePropsModel } from '#lib-frontend/animation/animation.models';
import { type TextStyleModel } from '#lib-frontend/style/style.models';
import { type ColorStylerParamsModel } from '#lib-frontend/style/utils/styler/colorStyler/colorStyler.models';
import { type FontStylerParamsModel } from '#lib-frontend/style/utils/styler/fontStyler/fontStyler.models';

export type LoadingPropsModel = AnimatablePropsModel<TextStyleModel> &
  ColorStylerParamsModel &
  Pick<FontStylerParamsModel, 'fontSize'>;
