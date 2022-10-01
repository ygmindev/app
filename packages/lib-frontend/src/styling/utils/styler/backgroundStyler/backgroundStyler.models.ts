import type {
  ThemeColorModel,
  ThemeRelativeColorModel,
  ThemeShadeModel,
} from '@lib/frontend/styling/utils/theme/theme.models';

export interface BackgroundStylerParamsModel {
  backgroundColor?: ThemeColorModel | ThemeRelativeColorModel | string;
  backgroundShade?: ThemeShadeModel;
}
