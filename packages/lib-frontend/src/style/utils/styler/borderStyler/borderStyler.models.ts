import { type CornerModel, type DirectionModel } from '@lib/frontend/core/core.models';
import { type ThemeRoleModel, type ThemeSizeModel } from '@lib/frontend/style/style.models';
import { type PartialModel } from '@lib/shared/core/core.models';

export type BorderStylerParamsModel = {
  border?: DirectionModel | boolean;
  borderColor?: string;
  borderRole?: ThemeRoleModel;
  borderWidth?: number;
  isShadow?: boolean;
  round?:
    | PartialModel<Record<CornerModel, ThemeSizeModel | boolean | number>>
    | ThemeSizeModel
    | boolean
    | number;
};
