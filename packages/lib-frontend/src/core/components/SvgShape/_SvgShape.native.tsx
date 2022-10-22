import type { _SvgShapePropsModel } from '@lib/frontend/core/components/SvgShape/_SvgShape.models';
import { SVG_SHAPE } from '@lib/frontend/core/components/SvgShape/SvgShape.constants';
import type { SFCModel } from '@lib/frontend/core/core.models';
import { Circle, Rect } from 'react-native-svg';

export const _SvgShape: SFCModel<_SvgShapePropsModel> = ({
  backgroundColor,
  borderColor,
  borderRadius,
  borderWidth,
  height,
  radius,
  shape,
  width,
  x,
  y,
}) => {
  switch (shape) {
    case SVG_SHAPE.CIRCLE:
      return (
        <Circle
          cx={x}
          cy={y}
          fill={backgroundColor}
          r={radius}
          stroke={borderColor}
          strokeWidth={borderWidth}
        />
      );
    case SVG_SHAPE.RECT:
      return (
        <Rect
          fill={backgroundColor}
          height={height}
          rx={borderRadius}
          ry={borderRadius}
          stroke={borderColor}
          strokeWidth={borderWidth}
          width={width}
          x={x}
          y={y}
        />
      );
    default:
      return null;
  }
};
