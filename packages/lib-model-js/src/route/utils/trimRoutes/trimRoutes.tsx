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
  route.navigation === ROUTE_NAVIGATION.LIST &&
    (route.element = (
      <RouteList
        mTop
        root
        routes={route.routes}
      />
    ));

  const isHeader =
    route.navigation === ROUTE_NAVIGATION.LIST || route.navigation === ROUTE_NAVIGATION.TRANSITION;
  const isTabbed = route.navigation === ROUTE_NAVIGATION.TAB;
  const isList = isHeader || isTabbed;

  if (isList) {
    route.transition = ROUTE_TRANSITION.SLIDE;
    route.routes = [
      {
        element: route.element,
        header: isHeader || route.header,
        isNavigatable: false,
        namespaces: route.namespaces,
        pathname: '/',
        previous: isHeader ? route.parent : (route.previous ?? route.parent),
        title: route.title,
      },
      ...(route.routes?.map((child) => ({
        ...child,
        header: isHeader || child.header,
        previous: isHeader
          ? isTabbed
            ? route.parent
            : route.fullpath
          : (child.previous ?? route.parent),
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
          isModal: child.isModal || route.isModal,
          parent: route.fullpath,
        },
        route.depth,
      ),
    ));

  route.element = <Route route={{ ...route, element: route.element }} />;

  return route;
};

export const trimRoutes = (routes: TrimRoutesParamsModel): TrimRoutesModel =>
  routes.map((route) => trimRoute(route));
