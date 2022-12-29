import type { _SvgShapePropsModel } from '@lib/frontend/core/components/SvgShape/_SvgShape.models';
import { SVG_SHAPE } from '@lib/frontend/core/components/SvgShape/SvgShape.constants';
import { composeComponent } from '@lib/frontend/core/utils/composeComponent/composeComponent';
import type { ComponentType } from 'react';
import { Fragment } from 'react';
import type { CircleProps, RectProps } from 'react-native-svg';
import { Circle, Rect } from 'react-native-svg';

export const _SvgShape = composeComponent<_SvgShapePropsModel, CircleProps | RectProps>({
  getComponent: ({ shape }) => {
    switch (shape) {
      case SVG_SHAPE.CIRCLE:
        return Circle as ComponentType<CircleProps | RectProps>;
      case SVG_SHAPE.RECT:
        return Rect as ComponentType<CircleProps | RectProps>;
      default:
        return Fragment as ComponentType<CircleProps | RectProps>;
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
          cx: x,
          cy: y,
          fill: backgroundColor,
          r: radius,
          stroke: borderColor,
          strokeWidth: borderWidth,
        } as CircleProps | RectProps;
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
        } as CircleProps | RectProps;
      default:
        return {};
    }
  },
});
