import type { _SvgShapePropsModel } from '@lib/frontend/core/components/SvgShape/_SvgShape.models';
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

  getProps: ({
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
        return {
          fill: backgroundColor,
          r: radius,
          stroke: borderColor,
          strokeWidth: borderWidth,
          x: x,
          y: y,
        };
      case SVG_SHAPE.RECT:
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
      default:
        return {};
    }
  },

  isWeb: true,
});
