import type { DimensionModel } from '@lib/frontend/platform/platform.models';
import type { SHAPE_POSITION } from '@lib/frontend/style/utils/styler/shapeStyler/shapeStyler.constants';
import type { ThemeSizeModel } from '@lib/frontend/style/style.models';

export type ShapePositionModel = `${SHAPE_POSITION}`;

export interface ShapeStylerParamsModel extends DimensionModel {
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
  size?: ThemeSizeModel;
  top?: number;
  zIndex?: number;
}
