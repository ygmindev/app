import type { SVG_SHAPE } from '@lib/frontend/core/components/SvgShape/SvgShape.constants';
import type { PositionModel } from '@lib/frontend/core/core.models';
import type { ShapeStylerParamsModel } from '@lib/frontend/style/utils/styler/shapeStyler/shapeStyler.models';
import type { PartialModel } from '@lib/shared/core/core.models';

export interface _RectPropsModel
  extends Pick<ShapeStylerParamsModel, 'width' | 'height' | 'isFullWidth' | 'isFullHeight'> {
  borderRadius?: number;
}

export interface _CirclePropsModel {
  radius?: number;
}

export type _SvgShapePropsModel = PartialModel<PositionModel> & {
  backgroundColor?: string;
  borderColor?: string;
  borderWidth?: number;
} & (
    | {
        shape: SVG_SHAPE.CIRCLE;
        shapeProps: _CirclePropsModel;
      }
    | {
        shape: SVG_SHAPE.RECT;
        shapeProps: _RectPropsModel;
      }
  );
