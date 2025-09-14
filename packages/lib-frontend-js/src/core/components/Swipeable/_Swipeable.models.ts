import { type DIRECTION } from '@lib/frontend/core/core.constants';
import { type ChildrenPropsModel, type PositionModel } from '@lib/frontend/core/core.models';

export type _SwipeablePropsModel = ChildrenPropsModel & {
  threshold?: number;
  onChange?(position: PositionModel): void;
  onEnd?(position: PositionModel): void;
  onSwipe?(direction: DIRECTION): void;
};
