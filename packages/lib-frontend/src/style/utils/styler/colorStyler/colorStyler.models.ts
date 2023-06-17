import type { ThemeColorModel, ThemeRoleModel } from '#lib-frontend/style/style.models';

export type ColorStylerParamsModel = {
  color?: ThemeColorModel | string;
  colorRole?: ThemeRoleModel;
};
