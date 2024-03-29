import { SHAPE_POSITION } from '@lib/frontend/style/utils/styler/shapeStyler/shapeStyler.constants';
import { type ShapeStylerParamsModel } from '@lib/frontend/style/utils/styler/shapeStyler/shapeStyler.models';
import { type StylerModel } from '@lib/frontend/style/utils/styler/styler.models';
import { cleanObject } from '@lib/shared/core/utils/cleanObject/cleanObject';

export const shapeStyler: StylerModel<ShapeStylerParamsModel> = ({
  bottom,
  height,
  isAbsoluteFill,
  isFullHeight,
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
    bottom: isAbsoluteFill ? bottom || 0 : bottom,
    height: isFullHeight ? '100%' : height,
    left: isAbsoluteFill ? left || 0 : left,
    maxHeight,
    maxWidth,
    minHeight,
    minWidth,
    opacity: isHidden ? 0 : opacity,
    overflow: isOverflowHidden ? 'hidden' : undefined,
    pointerEvents: isHidden ? 'none' : undefined,
    position: isAbsoluteFill ? SHAPE_POSITION.ABSOLUTE : position,
    right: isAbsoluteFill ? right || 0 : right,
    top: isAbsoluteFill ? top || 0 : top,
    transform: scale ? [{ scale }] : undefined,
    width: isFullWidth ? '100%' : width,
    zIndex: zIndex === true ? 1 : zIndex,
  });
