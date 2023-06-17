import type { ThemeColorModel, ThemeRoleModel } from '#lib-frontend/style/style.models';
import type {
  BORDER_DIRECTION,
  BORDER_RADIUS_DIRECTION,
} from '#lib-frontend/style/utils/styler/borderStyler/borderStyler.constants';

export type BorderDirectionModel = `${BORDER_DIRECTION}`;

export type BorderRadiusDirection = `${BORDER_RADIUS_DIRECTION}`;

export type BorderStylerParamsModel = {
  border?: BorderDirectionModel | boolean;
  borderColor?: ThemeColorModel | string;
  borderRole?: ThemeRoleModel;
  borderWidth?: number;
  isShadow?: boolean;
  round?: Record<BorderRadiusDirection, boolean | number> | boolean | number;
};
