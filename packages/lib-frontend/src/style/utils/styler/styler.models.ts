import type { UseThemeModel } from '@lib/frontend/style/hooks/useTheme/useTheme.models';
import type { StyleModel } from '@lib/frontend/style/style.models';

export type StylerModel<TParams> = (params: TParams, theme: UseThemeModel) => StyleModel;
