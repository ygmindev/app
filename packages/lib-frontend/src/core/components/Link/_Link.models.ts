import type { ChildrenPropsModel } from '@lib/frontend/core/core.models';
import type { CallableModel } from '@lib/shared/core/core.models';

export interface _LinkPropsModel extends ChildrenPropsModel {
  isNewTab?: boolean;
  onPress?: CallableModel;
  pathname?: string;
}
