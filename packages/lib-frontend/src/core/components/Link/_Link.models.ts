import { type ChildrenPropsModel } from '#lib-frontend/core/core.models';
import { type CallableModel } from '#lib-shared/core/core.models';

export type _LinkPropsModel = {
  isNewTab?: boolean;
  onPress?: CallableModel;
  pathname?: string;
} & ChildrenPropsModel;
