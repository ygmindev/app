import type { WithChildrenPropsModel } from '@lib/frontend/core/decorators/withChildrenProps/withChildrenProps.models';
import type { ShapeStylerParamsModel } from '@lib/frontend/style/utils/styler/shapeStyler/shapeStyler.models';

export interface _SvgPropsModel
  extends WithChildrenPropsModel,
    Pick<ShapeStylerParamsModel, 'width' | 'height' | 'isFullWidth' | 'isFullHeight'> {}
