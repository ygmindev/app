import { Route } from '@lib/frontend/route/components/Route/Route';
import { RouteList } from '@lib/frontend/route/components/RouteList/RouteList';
import { ROUTE_NAVIGATION, ROUTE_TRANSITION } from '@lib/frontend/route/route.constants';
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
  const isList = route.navigation === ROUTE_NAVIGATION.LIST;

  isList &&
    (route.element = (
      <RouteList
        mTop
        root
        routes={route.routes}
      />
    ));

  const isHeader = isList || route.navigation === ROUTE_NAVIGATION.TRANSITION;
  const isTabbed = route.navigation === ROUTE_NAVIGATION.TAB;
  const isSlide = isHeader || isTabbed;

  if (isSlide) {
    route.transition = route.transition ?? ROUTE_TRANSITION.SLIDE;
    route.routes = [
      {
        element: route.element,
        header: isHeader || route.header,
        isNavigatable: false,
        namespaces: route.namespaces,
        pathname: '/',
        previous: route.previous ?? (isHeader ? route.parent : route.previous),
        title: route.title,
      },
      ...(route.routes?.map((child) => ({
        ...child,
        header: isHeader || child.header,
        previous:
          child.previous ??
          (isHeader ? (isTabbed ? route.parent : route.fullpath) : route.previous),
        title: child.title ?? child.pathname,
      })) ?? []),
    ];
    route.element = undefined;
  }

  route.routes &&
    (route.routes = route.routes.map((child) =>
      trimRoute(
        {
          ...child,
          parent: route.fullpath,
          previous: child.previous || route.previous,
        },
        route.depth,
      ),
    ));

  route.element = <Route route={{ ...route, element: route.element }} />;

  return route;
};

export const trimRoutes = (routes: TrimRoutesParamsModel): TrimRoutesModel =>
  routes.map((route) => trimRoute(route));
