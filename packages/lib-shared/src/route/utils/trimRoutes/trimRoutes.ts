import { type RouteModel } from '@lib/frontend/route/route.models';
import { trimRoute as trimRouteBase } from '@lib/shared/route/utils/trimRoutes/trimRoute';
import {
  type TrimRoutesModel,
  type TrimRoutesParamsModel,
} from '@lib/shared/route/utils/trimRoutes/trimRoutes.models';

export const trimRoute = (route: RouteModel, depth = 0): RouteModel => {
  const routeF = trimRouteBase(route, depth);
  routeF.routes &&
    (routeF.routes = routeF.routes.map((child) =>
      trimRoute({ ...child, parent: routeF.fullpath }, routeF.depth),
    ));
  return routeF;
};

export const trimRoutes = (routes: TrimRoutesParamsModel): TrimRoutesModel =>
  routes.map((route) => trimRoute(route));
