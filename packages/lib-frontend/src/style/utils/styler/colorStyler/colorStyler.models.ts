import { type ThemeColorModel, type ThemeRoleModel } from '#lib-frontend/style/style.models';

export type ColorStylerParamsModel = {
  color?: ThemeColorModel | string;
  colorRole?: ThemeRoleModel;
};
