import { colorStyler } from '@lib/frontend/styling/utils/styler/colorStyler/colorStyler';
import { fontStyler } from '@lib/frontend/styling/utils/styler/fontStyler/fontStyler';
import { shapeStyler } from '@lib/frontend/styling/utils/styler/shapeStyler/shapeStyler';
import { spacingStyler } from '@lib/frontend/styling/utils/styler/spacingStyler/spacingStyler';
import type { StylerModel } from '@lib/frontend/styling/utils/styler/styler.models';
import type { TextStylerParamsModel } from '@lib/frontend/styling/utils/styler/textStyler/textStyler.models';

export const textStyler: StylerModel<TextStylerParamsModel> = ({ size, ...params }, context) => ({
  ...colorStyler(params, context),
  ...fontStyler({ ...params, size }, context),
  ...spacingStyler(params, context),
  ...shapeStyler(params, context),
});
