import type { SVG_SHAPE } from '@lib/frontend/core/components/SvgShape/SvgShape.constants';
import type { PositionModel } from '@lib/frontend/core/utils/measure/measure.models';
import type { ShapeStylerParamsModel } from '@lib/frontend/styling/utils/styler/shapeStyler/shapeStyler.models';
import type { WithTestIdModel } from '@lib/frontend/testing/testing.models';
import type { PartialModel } from '@lib/shared/core/core.models';

export type _SvgShapePropsModel = WithTestIdModel &
  PartialModel<PositionModel> & {
    backgroundColor?: string;
    borderColor?: string;
    borderWidth?: number;
  } & (
    | {
        borderRadius?: never;
        height?: never;
        isFullHeight?: never;
        isFullWidth?: never;
        radius?: number;
        shape: SVG_SHAPE.CIRCLE;
        width?: never;
      }
    | ({ borderRadius?: number; radius?: never; shape: SVG_SHAPE.RECT } & Pick<
        ShapeStylerParamsModel,
        'width' | 'height' | 'isFullWidth' | 'isFullHeight'
      >)
  );
