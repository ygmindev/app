import { type ThemeColorMoreModel, type ThemeRoleModel } from '#lib-frontend/style/style.models';

export type ColorStylerParamsModel = {
  color?: ThemeColorMoreModel | string;
  colorRole?: ThemeRoleModel;
};
