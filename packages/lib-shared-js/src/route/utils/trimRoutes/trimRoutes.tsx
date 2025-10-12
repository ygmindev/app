import { type RouteModel } from '@lib/frontend/route/route.models';
import { trimPathname } from '@lib/frontend/route/utils/trimPathname/trimPathname';
import {
  type TrimRoutesModel,
  type TrimRoutesParamsModel,
} from '@lib/shared/route/utils/trimRoutes/trimRoutes.models';

export const trimRoute = (route: RouteModel, depth = 0): RouteModel => {
  route.pathname = route.pathname && trimPathname(route.pathname);
  route.depth = route.pathname === '/' ? depth : depth + 1;
  route.fullpath = trimPathname(`${route.parent ?? ''}/${route.pathname}`);
  route.routes &&
    (route.routes = route.routes.map((child) =>
      trimRoute(
        {
          ...child,
          parent: route.fullpath,
          previous: child.previous ?? route.previous,
        },
        route.depth,
      ),
    ));
  return route;
};

export const trimRoutes = (routes: TrimRoutesParamsModel): TrimRoutesModel =>
  routes.map((route) => trimRoute(route));
