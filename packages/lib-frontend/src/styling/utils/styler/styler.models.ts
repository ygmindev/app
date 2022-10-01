import type { StyleModel } from '@lib/frontend/styling/styling.models';
import type { ThemeContextModel } from '@lib/frontend/styling/utils/theme/theme.models';

export type StylerModel<TParams> = (params: TParams, context?: ThemeContextModel) => StyleModel;
