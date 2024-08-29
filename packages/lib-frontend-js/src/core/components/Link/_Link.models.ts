import {
  type ChildrenPropsModel,
  type ElementStatePropsModel,
} from '@lib/frontend/core/core.models';

export type _LinkPropsModel = ChildrenPropsModel &
  ElementStatePropsModel & {
    isNewTab?: boolean;
    onPress?(): void;
    pathname?: string;
  };
