import {
  type ThemeColorModel,
  type ThemeColorMoreModel,
  type ThemeRoleModel,
} from '#lib-frontend/style/style.models';

export type BackgroundStylerParamsModel = {
  backgroundColor?: ThemeColorModel | ThemeColorMoreModel | string;
  backgroundRole?: ThemeRoleModel;
};
