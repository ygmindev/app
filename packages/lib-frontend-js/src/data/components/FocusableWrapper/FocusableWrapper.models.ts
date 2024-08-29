import {
  type AsyncTextModel,
  type ChildrenPropsModel,
  type ElementStatePropsModel,
} from '@lib/frontend/core/core.models';

export type FocusableWrapperPropsModel = ElementStatePropsModel &
  ChildrenPropsModel & { error?: AsyncTextModel | boolean };

export type FocusableRefModel = {
  blur?(): void;
  focus?(): void;
};
