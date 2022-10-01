import type { DimensionModel } from '@lib/frontend/platform/platform.models';

export type MeasurePositionModel = 'top' | 'bottom' | 'left' | 'right' | 'center';

export interface PositionModel {
  x: number;
  y: number;
}

export interface MeasureModel extends PositionModel, DimensionModel {}
