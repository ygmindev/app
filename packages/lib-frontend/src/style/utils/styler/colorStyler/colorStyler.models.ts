import type { ThemeColorModel, ThemeRoleModel } from '#lib-frontend/style/style.models';

export interface ColorStylerParamsModel {
  color?: ThemeColorModel | string;
  colorRole?: ThemeRoleModel;
}
