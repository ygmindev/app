import type { ColorStylerParamsModel } from '@lib/frontend/styling/utils/styler/colorStyler/colorStyler.models';
import type { FontStylerParamsModel } from '@lib/frontend/styling/utils/styler/fontStyler/fontStyler.models';
import type { ShapeStylerParamsModel } from '@lib/frontend/styling/utils/styler/shapeStyler/shapeStyler.models';
import type { SpacingStylerParamsModel } from '@lib/frontend/styling/utils/styler/spacingStyler/spacingStyler.models';

export type TextStylerParamsModel = ColorStylerParamsModel &
  FontStylerParamsModel &
  Omit<ShapeStylerParamsModel, 'size'> &
  SpacingStylerParamsModel;
