import type {
  _CirclePropsModel,
  _RectPropsModel,
  _SvgShapePropsModel,
} from '@lib/frontend/core/components/SvgShape/_SvgShape.models';
import { SVG_SHAPE } from '@lib/frontend/core/components/SvgShape/SvgShape.constants';
import { composeComponent } from '@lib/frontend/core/utils/composeComponent/composeComponent';
import type { SVGAttributes } from 'react';
import { Fragment } from 'react';

export const _SvgShape = composeComponent<_SvgShapePropsModel, SVGAttributes<SVGElement>>({
  getComponent: ({ shape }) => {
    switch (shape) {
      case SVG_SHAPE.CIRCLE:
        return 'circle';
      case SVG_SHAPE.RECT:
        return 'rect';
      default:
        return Fragment;
    }
  },

  getProps: ({ backgroundColor, borderColor, borderWidth, shape, shapeProps, x = 0, y = 0 }) => {
    switch (shape) {
      case SVG_SHAPE.CIRCLE: {
        const { radius } = shapeProps as _CirclePropsModel;
        return {
          fill: backgroundColor,
          r: radius,
          stroke: borderColor,
          strokeWidth: borderWidth,
          x: x,
          y: y,
        };
      }
      case SVG_SHAPE.RECT: {
        const { borderRadius, height, isFullHeight, isFullWidth, width } =
          shapeProps as _RectPropsModel;
        return {
          fill: backgroundColor,
          height: isFullHeight ? '100%' : height,
          rx: borderRadius,
          ry: borderRadius,
          stroke: borderColor,
          strokeWidth: borderWidth,
          width: isFullWidth ? '100%' : width,
          x: x,
          y: y,
        };
      }
      default:
        return {};
    }
  },

  isWeb: true,
});
