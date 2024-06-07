import { type ChildrenPropsModel, type PositionModel } from '@lib/frontend/core/core.models';

export type _SwipeablePropsModel = ChildrenPropsModel & {
  onChange?(position: PositionModel): void;
  onEnd?(position: PositionModel): void;
  threshold?: number;
};
