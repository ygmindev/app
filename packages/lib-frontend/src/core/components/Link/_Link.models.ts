import { type ChildrenPropsModel } from '#lib-frontend/core/core.models';

export type _LinkPropsModel = {
  isNewTab?: boolean;
  onPress?(): void;
  pathname?: string;
} & ChildrenPropsModel;
