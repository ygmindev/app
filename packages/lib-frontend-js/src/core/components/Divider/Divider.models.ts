import { type ChildrenPropsModel } from '@lib/frontend/core/core.models';
import { type AsyncTextModel } from '@lib/frontend/core/components/AsyncText/AsyncText.models';

export type DividerPropsModel = ChildrenPropsModel<AsyncTextModel> & {
  isVertical?: boolean;
};
