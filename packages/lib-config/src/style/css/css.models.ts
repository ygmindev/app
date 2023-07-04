import { type ThemeModel } from '#lib-frontend/style/style.models';
import { type CallableModel } from '#lib-shared/core/core.models';

export type CssConfigModel = {
  stylesheet: CallableModel<string, ThemeModel>;
};
