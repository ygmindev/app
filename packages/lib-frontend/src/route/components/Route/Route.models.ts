import type { ChildrenPropsModel } from '#lib-frontend/core/core.models';
import type { RouteModel } from '#lib-frontend/route/route.models';

export interface RoutePropsModel extends ChildrenPropsModel {
  route: RouteModel;
}
