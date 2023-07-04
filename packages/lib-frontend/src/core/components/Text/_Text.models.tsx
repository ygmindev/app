import { type ChildrenPropsModel } from '#lib-frontend/core/core.models';
import { type ArrayCallableModel } from '#lib-shared/core/core.models';

export type _TextPropsModel = {
  isEllipsis?: boolean;
  onPress?: ArrayCallableModel;
} & ChildrenPropsModel<string>;
