import type {
  ThemeColorModel,
  ThemeRelativeColorModel,
  ThemeShadeModel,
} from '@lib/frontend/styling/utils/theme/theme.models';

export interface ColorStylerParamsModel {
  color?: ThemeColorModel | ThemeRelativeColorModel | string;
  shade?: ThemeShadeModel;
}
