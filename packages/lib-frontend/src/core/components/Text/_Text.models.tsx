import { type ChildrenPropsModel } from '#lib-frontend/core/core.models';

export type _TextPropsModel = {
  isEllipsis?: boolean;
  onPress?(): void;
} & ChildrenPropsModel<string>;
