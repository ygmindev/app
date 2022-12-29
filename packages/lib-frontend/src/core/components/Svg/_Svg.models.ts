import type { ChildrenPropsModel } from '@lib/frontend/core/core.models';
import type { ShapeStylerParamsModel } from '@lib/frontend/style/utils/styler/shapeStyler/shapeStyler.models';

export interface _SvgPropsModel
  extends ChildrenPropsModel,
    Pick<ShapeStylerParamsModel, 'width' | 'height' | 'isFullWidth' | 'isFullHeight'> {}
