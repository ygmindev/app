import { type DimensionModel } from '#lib-frontend/core/core.models';
import { type ThemeSizeMoreModel } from '#lib-frontend/style/style.models';
import { type SHAPE_POSITION } from '#lib-frontend/style/utils/styler/shapeStyler/shapeStyler.constants';

export type ShapePositionModel = `${SHAPE_POSITION}`;

export type ShapeStylerParamsModel = {
  bottom?: number;
  isAbsoluteFill?: boolean;
  isFullHeight?: boolean;
  isFullWidth?: boolean;
  isOverflowHidden?: boolean;
  left?: number;
  maxHeight?: number;
  maxWidth?: number;
  minHeight?: number;
  minWidth?: number;
  opacity?: number;
  position?: ShapePositionModel;
  right?: number;
  scale?: number;
  size?: ThemeSizeMoreModel;
  top?: number;
  zIndex?: number;
} & DimensionModel;
