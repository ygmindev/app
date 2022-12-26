import type { ThemeColorModel, ThemeRoleModel } from '@lib/frontend/style/style.models';

export interface BackgroundStylerParamsModel {
  backgroundColor?: ThemeColorModel | string;
  backgroundRole?: ThemeRoleModel;
}
