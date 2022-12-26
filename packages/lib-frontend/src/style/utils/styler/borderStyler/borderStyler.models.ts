import type { ThemeColorModel, ThemeRoleModel } from '@lib/frontend/style/style.models';
import type { BORDER_DIRECTION } from '@lib/frontend/style/utils/styler/borderStyler/borderStyler.constants';

export type BorderDirectionModel = `${BORDER_DIRECTION}`;

export interface BorderStylerParamsModel {
  border?: BorderDirectionModel | boolean;
  borderColor?: ThemeColorModel | string;
  borderRole?: ThemeRoleModel;
  borderWidth?: number;
  isShadow?: boolean;
  round?: boolean | number;
}
