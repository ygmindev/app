import type { WithChildrenPropsModel } from '@lib/frontend/core/decorators/withChildrenProps/withChildrenProps.models';
import type { ShapeStylerParamsModel } from '@lib/frontend/style/utils/styler/shapeStyler/shapeStyler.models';
import type { WithTestIdModel } from '@lib/frontend/testing/testing.models';

export interface _SvgPropsModel
  extends WithTestIdModel,
    WithChildrenPropsModel,
    Pick<ShapeStylerParamsModel, 'width' | 'height' | 'isFullWidth' | 'isFullHeight'> {}
