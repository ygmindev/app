import type {
  ThemeColorModel,
  ThemeRelativeColorModel,
  ThemeShadeModel,
} from '@lib/frontend/style/utils/theme/theme.models';

export interface BackgroundStylerParamsModel {
  backgroundColor?: ThemeColorModel | ThemeRelativeColorModel | string;
  backgroundShade?: ThemeShadeModel;
}
