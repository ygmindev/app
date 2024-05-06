import { type AsyncTextModel, type ChildrenPropsModel } from '@lib/frontend/core/core.models';

export type DividerPropsModel = ChildrenPropsModel<AsyncTextModel> & {
  isVertical?: boolean;
};
