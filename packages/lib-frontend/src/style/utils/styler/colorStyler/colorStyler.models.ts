import type {
  ThemeColorModel,
  ThemeRelativeColorModel,
  ThemeShadeModel,
} from '@lib/frontend/style/style.models';

export interface ColorStylerParamsModel {
  color?: ThemeColorModel | ThemeRelativeColorModel | string;
  shade?: ThemeShadeModel;
}
