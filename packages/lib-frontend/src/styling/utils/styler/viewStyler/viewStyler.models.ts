import type { BackgroundStylerParamsModel } from '@lib/frontend/styling/utils/styler/backgroundStyler/backgroundStyler.models';
import type { BorderStylerParamsModel } from '@lib/frontend/styling/utils/styler/borderStyler/borderStyler.models';
import type { FlexStylerParamsModel } from '@lib/frontend/styling/utils/styler/flexStyler/flexStyler.models';
import type { ShapeStylerParamsModel } from '@lib/frontend/styling/utils/styler/shapeStyler/shapeStyler.models';
import type { SpacingStylerParamsModel } from '@lib/frontend/styling/utils/styler/spacingStyler/spacingStyler.models';

export type ViewStylerParamsModel = BackgroundStylerParamsModel &
  BorderStylerParamsModel &
  ShapeStylerParamsModel &
  SpacingStylerParamsModel &
  FlexStylerParamsModel;
