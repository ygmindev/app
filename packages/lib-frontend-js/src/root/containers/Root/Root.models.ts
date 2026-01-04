import { type ChildrenPropsModel } from '@lib/frontend/core/core.models';
import { type RootContextPropsModel } from '@lib/frontend/root/root.models';
import { type RouteModel } from '@lib/frontend/route/route.models';

export type RootPropsModel = ChildrenPropsModel &
  RootContextPropsModel & {
    routes?: Array<RouteModel>;
  };
