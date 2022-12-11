import type {
  ThemeColorModel,
  ThemeRelativeColorModel,
  ThemeShadeModel,
} from '@lib/frontend/style/utils/theme/theme.models';

export interface ColorStylerParamsModel {
  color?: ThemeColorModel | ThemeRelativeColorModel | string;
  shade?: ThemeShadeModel;
}
