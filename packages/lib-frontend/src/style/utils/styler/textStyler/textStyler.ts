import { colorStyler } from '@lib/frontend/style/utils/styler/colorStyler/colorStyler';
import { fontStyler } from '@lib/frontend/style/utils/styler/fontStyler/fontStyler';
import { shapeStyler } from '@lib/frontend/style/utils/styler/shapeStyler/shapeStyler';
import { spacingStyler } from '@lib/frontend/style/utils/styler/spacingStyler/spacingStyler';
import type { StylerModel } from '@lib/frontend/style/utils/styler/styler.models';
import type { TextStylerParamsModel } from '@lib/frontend/style/utils/styler/textStyler/textStyler.models';

export const textStyler: StylerModel<TextStylerParamsModel> = (params, theme) => ({
  ...colorStyler(params, theme),
  ...fontStyler(params, theme),
  ...spacingStyler(params, theme),
  ...shapeStyler(params, theme),
});
