import { type ThemeModel } from '@lib/frontend/style/style.models';

export type CssConfigModel = {
  stylesheet(params: ThemeModel): string;
};
