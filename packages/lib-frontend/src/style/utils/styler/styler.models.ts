import { type UseThemeModel } from '@lib/frontend/style/hooks/useTheme/useTheme.models';
import { type StyleModel, type ViewStyleModel } from '@lib/frontend/style/style.models';

export type StylerModel<TProps, TStyle extends StyleModel = ViewStyleModel> = (
  params: TProps,
  theme: UseThemeModel,
) => TStyle;
