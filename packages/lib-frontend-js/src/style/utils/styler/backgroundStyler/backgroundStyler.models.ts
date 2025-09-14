import { type THEME_ROLE } from '@lib/frontend/style/style.constants';

export type BackgroundStylerParamsModel = {
  backgroundColor?: string;
  backgroundRole?: THEME_ROLE;
  isTransparent?: boolean;
};
