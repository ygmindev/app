import type { StyleModel } from '@lib/frontend/style/style.models';
import type { ThemeContextModel } from '@lib/frontend/style/style.models';

export type StylerModel<TParams> = (params: TParams, context?: ThemeContextModel) => StyleModel;
