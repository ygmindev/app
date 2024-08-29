import {
  type ChildrenPropsModel,
  type ElementStatePropsModel,
} from '@lib/frontend/core/core.models';

export type SlidePropsModel = ChildrenPropsModel &
  ElementStatePropsModel & {
    isBack?: boolean;
  };
