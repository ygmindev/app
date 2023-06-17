import type { ChildrenPropsModel } from '#lib-frontend/core/core.models';
import type { CallableArgsModel } from '#lib-shared/core/core.models';

export type _TextPropsModel = {
  isEllipsis?: boolean;
  onPress?: CallableArgsModel;
} & ChildrenPropsModel<string>;
