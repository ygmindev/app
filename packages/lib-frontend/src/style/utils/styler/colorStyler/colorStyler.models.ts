import {
  type ThemeColorModel,
  type ThemeColorMoreModel,
  type ThemeRoleModel,
} from '#lib-frontend/style/style.models';

export type ColorStylerParamsModel = {
  color?: ThemeColorModel | ThemeColorMoreModel | string;
  colorRole?: ThemeRoleModel;
};
