import { type DimensionModel } from '@lib/frontend/core/core.models';
import { type SHAPE_POSITION } from '@lib/frontend/style/utils/styler/shapeStyler/shapeStyler.constants';

export type ShapePositionModel = `${SHAPE_POSITION}`;

export type ShapeStylerParamsModel = DimensionModel & {
  bottom?: number;
  isAbsoluteFill?: boolean;
  isFullHeight?: boolean;
  isFullWidth?: boolean;
  isHidden?: boolean;
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
  top?: number;
  zIndex?: number | true;
};
