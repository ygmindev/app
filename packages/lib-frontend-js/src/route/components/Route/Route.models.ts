import { type ChildrenPropsModel } from '@lib/frontend/core/core.models';
import { type RouteModel } from '@lib/frontend/route/route.models';

export type RoutePropsModel = ChildrenPropsModel & {
  route?: RouteModel;
};
