import type { SVG_SHAPE } from '@lib/frontend/core/components/SvgShape/SvgShape.constants';
import type { PositionModel } from '@lib/frontend/core/utils/measure/measure.models';
import type { ShapeStylerParamsModel } from '@lib/frontend/style/utils/styler/shapeStyler/shapeStyler.models';
import type { PartialModel } from '@lib/shared/core/core.models';

interface _CircleProps {
  borderRadius?: never;
  height?: never;
  isFullHeight?: never;
  isFullWidth?: never;
  radius?: number;
  shape: SVG_SHAPE.CIRCLE;
  width?: never;
}

interface _RectProps
  extends Pick<ShapeStylerParamsModel, 'width' | 'height' | 'isFullWidth' | 'isFullHeight'> {
  borderRadius?: number;
  radius?: never;
  shape: SVG_SHAPE.RECT;
}

export type _SvgShapePropsModel = PartialModel<PositionModel> & {
  backgroundColor?: string;
  borderColor?: string;
  borderWidth?: number;
} & (_CircleProps | _RectProps);
