import { type AsyncTextModel } from '@lib/frontend/core/components/AsyncText/AsyncText.models';
import {
  type ChildrenPropsModel,
  type ElementStatePropsModel,
} from '@lib/frontend/core/core.models';

export type FocusableWrapperPropsModel = ElementStatePropsModel &
  ChildrenPropsModel & { error?: AsyncTextModel | boolean };

export type FocusableRefModel = {
  blur?(): void;
  focus?(): void;
};
