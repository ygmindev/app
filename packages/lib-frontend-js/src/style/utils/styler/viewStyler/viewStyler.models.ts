import { type BackgroundStylerParamsModel } from '@lib/frontend/style/utils/styler/backgroundStyler/backgroundStyler.models';
import { type BorderStylerParamsModel } from '@lib/frontend/style/utils/styler/borderStyler/borderStyler.models';
import { type FlexStylerParamsModel } from '@lib/frontend/style/utils/styler/flexStyler/flexStyler.models';
import { type ShapeStylerParamsModel } from '@lib/frontend/style/utils/styler/shapeStyler/shapeStyler.models';
import { type SpacingStylerParamsModel } from '@lib/frontend/style/utils/styler/spacingStyler/spacingStyler.models';

export type ViewStylerParamsModel = BackgroundStylerParamsModel &
  BorderStylerParamsModel &
  ShapeStylerParamsModel &
  SpacingStylerParamsModel &
  FlexStylerParamsModel;
