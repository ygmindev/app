import { type DirectionModel } from '#lib-frontend/core/core.models';
import { type ThemeRoleModel, type ThemeSizeModel } from '#lib-frontend/style/style.models';
import { type BORDER_RADIUS_DIRECTION } from '#lib-frontend/style/utils/styler/borderStyler/borderStyler.constants';

export type BorderRadiusDirection = `${BORDER_RADIUS_DIRECTION}`;

export type BorderStylerParamsModel = {
  border?: DirectionModel | boolean;
  borderColor?: string;
  borderRole?: ThemeRoleModel;
  borderWidth?: number;
  isShadow?: boolean;
  round?:
    | Record<BorderRadiusDirection, ThemeSizeModel | boolean | number>
    | ThemeSizeModel
    | boolean
    | number;
};
