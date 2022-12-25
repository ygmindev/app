import type {
  ThemeColorModel,
  ThemeRelativeColorModel,
  ThemeShadeModel,
} from '@lib/frontend/style/style.models';

export interface BackgroundStylerParamsModel {
  backgroundColor?: ThemeColorModel | ThemeRelativeColorModel | string;
  backgroundShade?: ThemeShadeModel;
}
