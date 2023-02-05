import type { ColorStylerParamsModel } from '@lib/frontend/style/utils/styler/colorStyler/colorStyler.models';
import type { FontStylerParamsModel } from '@lib/frontend/style/utils/styler/fontStyler/fontStyler.models';
import type { ShapeStylerParamsModel } from '@lib/frontend/style/utils/styler/shapeStyler/shapeStyler.models';

export type TextStylerParamsModel = ColorStylerParamsModel &
  FontStylerParamsModel &
  Pick<ShapeStylerParamsModel, 'width' | 'height'>;
