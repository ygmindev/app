import { type ChildrenPropsModel } from '@lib/frontend/core/core.models';

export type PortalPropsModel = ChildrenPropsModel & {
  root?: string;
};
