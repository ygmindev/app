import { SHAPE_POSITION } from '@lib/frontend/styling/utils/styler/shapeStyler/shapeStyler.constants';
import type { ShapeStylerParamsModel } from '@lib/frontend/styling/utils/styler/shapeStyler/shapeStyler.models';
import type { StylerModel } from '@lib/frontend/styling/utils/styler/styler.models';
import { cleanObject } from '@lib/shared/core/utils/cleanObject/cleanObject';

export const shapeStyler: StylerModel<ShapeStylerParamsModel> = ({
  bottom,
  height,
  isAbsoluteFill,
  isFullWidth,
  isHidden,
  isOverflowHidden,
  left,
  maxHeight,
  maxWidth,
  minHeight,
  minWidth,
  opacity,
  position,
  right,
  scale,
  top,
  width,
  zIndex,
}) =>
  cleanObject({
    bottom: isAbsoluteFill ? 0 : bottom,
    display: isHidden ? 'none' : undefined,
    height,
    left: isAbsoluteFill ? 0 : left,
    maxHeight,
    maxWidth,
    minHeight,
    minWidth,
    opacity,
    overflow: isOverflowHidden ? 'hidden' : undefined,
    position: isAbsoluteFill ? SHAPE_POSITION.ABSOLUTE : position,
    right: isAbsoluteFill ? 0 : right,
    top: isAbsoluteFill ? 0 : top,
    transform: scale ? [{ scale }] : undefined,
    width: isFullWidth ? '100%' : width,
    zIndex,
  });
