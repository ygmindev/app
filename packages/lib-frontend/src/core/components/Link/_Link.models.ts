import type { ChildrenPropsModel } from '@lib/frontend/core/core.models';
import type { CallableArgsModel } from '@lib/shared/core/core.models';

export interface _LinkPropsModel extends ChildrenPropsModel {
  isNewTab?: boolean;
  onPress?: CallableArgsModel;
  pathname?: string;
}
