import { type CornerModel, type DirectionModel } from '#lib-frontend/core/core.models';
import { type ThemeRoleModel, type ThemeSizeModel } from '#lib-frontend/style/style.models';

export type BorderStylerParamsModel = {
  border?: DirectionModel | boolean;
  borderColor?: string;
  borderRole?: ThemeRoleModel;
  borderWidth?: number;
  isShadow?: boolean;
  round?:
    | Record<CornerModel, ThemeSizeModel | boolean | number>
    | ThemeSizeModel
    | boolean
    | number;
};
