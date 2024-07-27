import { ROUTE_NAVIGATION, ROUTE_TRANSITION } from '@lib/frontend/route/route.constants';
import { type RouteModel } from '@lib/frontend/route/route.models';
import { trimPathname } from '@lib/frontend/route/utils/trimPathname/trimPathname';
import { merge } from '@lib/shared/core/utils/merge/merge';

export const trimRoute = (route: RouteModel, depth = 0): RouteModel => {
  route.pathname = trimPathname(route.pathname);
  route.depth = route.pathname === '/' ? depth : depth + 1;
  route.fullpath = trimPathname(`${route.parent ?? ''}/${route.pathname}`);

  const isHeader =
    route.navigation === ROUTE_NAVIGATION.LIST || route.navigation === ROUTE_NAVIGATION.TRANSITION;

  if (isHeader || route.navigation === ROUTE_NAVIGATION.TAB) {
    route.transition = ROUTE_TRANSITION.SLIDE;
    route.routes = [
      {
        element: route.element,
        header: isHeader ? merge([route.header, { previous: 1 }]) : route.header,
        isNavigatable: false,
        namespaces: route.namespaces,
        pathname: '/',
        title: route.title,
      },
      ...(route.routes?.map((child) => ({
        ...child,
        header: isHeader
          ? merge([{ previous: route.navigation === ROUTE_NAVIGATION.TAB ? 2 : 1 }, child.header])
          : child.header,
        title: child.title ?? child.pathname,
      })) ?? []),
    ];
    route.element = undefined;
  }

  return route;
};
