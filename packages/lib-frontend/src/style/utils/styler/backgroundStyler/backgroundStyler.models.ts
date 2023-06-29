import { type ThemeColorModel, type ThemeRoleModel } from '#lib-frontend/style/style.models';

export type BackgroundStylerParamsModel = {
  backgroundColor?: ThemeColorModel | string;
  backgroundRole?: ThemeRoleModel;
};
