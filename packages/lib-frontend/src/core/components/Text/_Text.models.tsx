import type { ChildrenPropsModel } from '@lib/frontend/core/core.models';
import type { CallableArgsModel } from '@lib/shared/core/core.models';

export interface _TextPropsModel extends ChildrenPropsModel<string> {
  isEllipsis?: boolean;
  onPress?: CallableArgsModel;
}
