import { type ChildrenPropsModel } from '@lib/frontend/core/core.models';

export type _FormPropsModel = {
  onSubmit?(): void;
} & ChildrenPropsModel;
