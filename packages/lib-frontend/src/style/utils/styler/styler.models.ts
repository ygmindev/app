import type { ThemeModel } from '@lib/frontend/style/hooks/useTheme/useTheme.models';
import type { StyleModel } from '@lib/frontend/style/style.models';

export type StylerModel<TParams> = (params: TParams, theme: ThemeModel) => StyleModel;
