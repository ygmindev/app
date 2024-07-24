import { RouteList } from '@lib/frontend/route/components/RouteList/RouteList';
import { ROUTE_NAVIGATION, ROUTE_TRANSITION } from '@lib/frontend/route/route.constants';
import { type RouteModel } from '@lib/frontend/route/route.models';
import { trimPathname } from '@lib/frontend/route/utils/trimPathname/trimPathname';
import { merge } from '@lib/shared/core/utils/merge/merge';
import {
  type TrimRoutesModel,
  type TrimRoutesParamsModel,
} from '@lib/shared/route/utils/trimRoutes/trimRoutes.models';

const trimRoute = (route: RouteModel, depth = 0): RouteModel => {
  route.pathname = trimPathname(route.pathname);
  route.parent = trimPathname(`${route.parent ?? ''}${route.pathname}`);
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

  route.routes &&
    (route.routes = route.routes.map((child) =>
      trimRoute({ ...child, parent: route.parent }, route.depth),
    ));

  // route.element && (route.element = <Route route={route} />);

  return route;
};

export const trimRoutes = (routes: TrimRoutesParamsModel): TrimRoutesModel =>
  routes.map((route) => trimRoute(route));

// import { RouteList } from '@lib/frontend/route/components/RouteList/RouteList';
// import { ROUTE_NAVIGATION, ROUTE_TRANSITION } from '@lib/frontend/route/route.constants';
// import { type RouteModel } from '@lib/frontend/route/route.models';
// import { trimPathname } from '@lib/frontend/route/utils/trimPathname/trimPathname';
// import { merge } from '@lib/shared/core/utils/merge/merge';
// import {
//   type TrimRoutesModel,
//   type TrimRoutesParamsModel,
// } from '@lib/shared/route/utils/trimRoutes/trimRoutes.models';

// const trimRoute = (route: RouteModel, depth = 0): RouteModel => {
//   switch (route.navigation) {
//     case ROUTE_NAVIGATION.LIST:
//     case ROUTE_NAVIGATION.TAB:
//     case ROUTE_NAVIGATION.TRANSITION: {
//       const isHeader =
//         route.navigation === ROUTE_NAVIGATION.LIST ||
//         route.navigation === ROUTE_NAVIGATION.TRANSITION;
//       route.transition = ROUTE_TRANSITION.SLIDE;
//       route.routes = [
//         {
//           element: route.element,
//           header: isHeader ? merge([route.header, { previous: 1 }]) : route.header,
//           isNavigatable: false,
//           namespaces: route.namespaces,
//           pathname: '/',
//           title: route.title,
//         },
//         ...(route.routes?.map((child) => ({
//           ...child,
//           header: isHeader
//             ? merge([{ previous: route.navigation === ROUTE_NAVIGATION.TAB ? 2 : 1 }, child.header])
//             : child.header,
//           title: child.title ?? child.pathname,
//         })) ?? []),
//       ];
//       break;
//     }
//   }
//   // route.element = <Route route={route} />;
//   route.routes = route.routes?.map(({ ...child }) =>
//     trimRoute({ ...child, parent: route.fullpath }),
//   );
//   return route;
// };

// export const trimRoutes = (routes: TrimRoutesParamsModel): TrimRoutesModel =>
//   routes.map((route) => trimRoute(route));
