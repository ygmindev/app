import { type RouteModel } from '@lib/frontend/route/route.models';
import { trimPathname } from '@lib/frontend/route/utils/trimPathname/trimPathname';
import {
  type TrimRoutesModel,
  type TrimRoutesParamsModel,
} from '@lib/shared/route/utils/trimRoutes/trimRoutes.models';
import trimEnd from 'lodash/trimEnd';

const trimRoute = (route: RouteModel, depth = 0): RouteModel => {
  const routeF = route;
  const pathnameF = trimPathname(trimEnd(routeF.pathname, '/*'));
  const depthF = pathnameF === '/' ? depth : depth + 1;
  const parentF = trimPathname(`${routeF.parent ?? ''}${pathnameF}`);
  return {
    ...routeF,
    depth: depthF,
    fullpath: trimPathname(`${routeF.parent ?? ''}/${pathnameF}`),
    pathname: trimPathname(pathnameF),
    routes: routeF.routes?.map((child) => trimRoute({ ...child, parent: parentF }, depthF)),
  };
};

export const trimRoutes = (routes: TrimRoutesParamsModel): TrimRoutesModel =>
  routes.map((route) => trimRoute(route));
