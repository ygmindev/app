import { type ChildrenPropsModel } from '@lib/frontend/core/core.models';

export type _SwipeablePropsModel = ChildrenPropsModel & {
  friction?: number;
  threshold?: number;
};
