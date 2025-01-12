import { type PositionModel } from '@lib/frontend/core/core.models';

export type ScrollBarPropsModel = {
  contentSize?: number;
  isHorizontal?: boolean;
  onScrollTo?(params: PositionModel): void;
  size?: number;
  value?: number;
};
