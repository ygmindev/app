import { type ThemeColorMoreModel, type ThemeRoleModel } from '#lib-frontend/style/style.models';

export type BackgroundStylerParamsModel = {
  backgroundColor?: ThemeColorMoreModel | string;
  backgroundRole?: ThemeRoleModel;
};
