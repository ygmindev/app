import { backgroundStyler } from '@lib/frontend/style/utils/styler/backgroundStyler/backgroundStyler';
import { borderStyler } from '@lib/frontend/style/utils/styler/borderStyler/borderStyler';
import { flexStyler } from '@lib/frontend/style/utils/styler/flexStyler/flexStyler';
import { shapeStyler } from '@lib/frontend/style/utils/styler/shapeStyler/shapeStyler';
import { spacingStyler } from '@lib/frontend/style/utils/styler/spacingStyler/spacingStyler';
import { type StylerModel } from '@lib/frontend/style/utils/styler/styler.models';
import { type ViewStylerParamsModel } from '@lib/frontend/style/utils/styler/viewStyler/viewStyler.models';

export const viewStyler: StylerModel<ViewStylerParamsModel> = (params, context) => ({
  ...borderStyler(params, context),
  ...backgroundStyler(params, context),
  ...flexStyler(params, context),
  ...shapeStyler(params, context),
  ...spacingStyler(params, context),
});
