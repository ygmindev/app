import type { _SvgShapePropsModel } from '@lib/frontend/core/components/SvgShape/_SvgShape.models';
import { SVG_SHAPE } from '@lib/frontend/core/components/SvgShape/SvgShape.constants';
import type { SFCModel } from '@lib/frontend/core/core.models';

export const _SvgShape: SFCModel<_SvgShapePropsModel> = ({
  backgroundColor,
  borderColor,
  borderRadius,
  borderWidth,
  height,
  isFullHeight,
  isFullWidth,
  radius,
  shape,
  width,
  x,
  y,
}) => {
  switch (shape) {
    case SVG_SHAPE.CIRCLE:
      return (
        <circle
          fill={backgroundColor}
          r={radius}
          stroke={borderColor}
          strokeWidth={borderWidth}
          x={x}
          y={y}
        />
      );
    case SVG_SHAPE.RECT:
      return (
        <rect
          fill={backgroundColor}
          height={isFullHeight ? '100%' : height}
          rx={borderRadius}
          ry={borderRadius}
          stroke={borderColor}
          strokeWidth={borderWidth}
          width={isFullWidth ? '100%' : width}
          x={x}
          y={y}
        />
      );
    default:
      return null;
  }
};
