import { type AsyncTextModel } from '@lib/frontend/core/components/AsyncText/AsyncText.models';
import { type WrapperPropsModel } from '@lib/frontend/core/components/Wrapper/Wrapper.models';
import { type ChildrenPropsModel } from '@lib/frontend/core/core.models';

export type DividerPropsModel = WrapperPropsModel &
  ChildrenPropsModel<AsyncTextModel> & {
    isVertical?: boolean;
  };
