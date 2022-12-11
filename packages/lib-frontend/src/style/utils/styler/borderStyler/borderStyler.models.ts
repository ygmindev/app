import type { BORDER_DIRECTION } from '@lib/frontend/style/utils/styler/borderStyler/borderStyler.constants';
import type {
  ThemeColorModel,
  ThemeShadeModel,
} from '@lib/frontend/style/utils/theme/theme.models';

export type BorderDirectionModel = `${BORDER_DIRECTION}`;

export interface BorderStylerParamsModel {
  border?: BorderDirectionModel | boolean;
  borderColor?: ThemeColorModel | string;
  borderShade?: ThemeShadeModel;
  borderWidth?: number;
  isShadow?: boolean;
  round?: boolean | number;
}
