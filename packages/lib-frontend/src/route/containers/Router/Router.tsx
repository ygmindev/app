import { Wrapper } from '@lib/frontend/core/components/Wrapper/Wrapper';
import { type LFCModel } from '@lib/frontend/core/core.models';
import { Route } from '@lib/frontend/route/components/Route/Route';
import { RouteList } from '@lib/frontend/route/components/RouteList/RouteList';
import { type RouterPropsModel } from '@lib/frontend/route/containers/Router/Router.models';
import { Routes } from '@lib/frontend/route/containers/Routes/Routes';
import { ROUTE_NAVIGATION, ROUTE_TRANSITION } from '@lib/frontend/route/route.constants';
import { type RouteModel } from '@lib/frontend/route/route.models';
import { trimPathname } from '@lib/frontend/route/utils/trimPathname/trimPathname';
import { useLayoutStyles } from '@lib/frontend/style/hooks/useLayoutStyles/useLayoutStyles';
import { SHAPE_POSITION } from '@lib/frontend/style/utils/styler/shapeStyler/shapeStyler.constants';
import { merge } from '@lib/shared/core/utils/merge/merge';
import trimEnd from 'lodash/trimEnd';
import { useMemo } from 'react';

const getNavigatableRoute = (route: RouteModel): RouteModel => {
  switch (route.navigation) {
    case ROUTE_NAVIGATION.LIST:
    case ROUTE_NAVIGATION.TAB:
    case ROUTE_NAVIGATION.TRANSITION: {
      const { element, header, namespaces, routes, title, ...routeF } = route;
      const elementF = (() => {
        switch (routeF.navigation) {
          case ROUTE_NAVIGATION.LIST:
            return (
              <RouteList
                root
                routes={route.routes}
              />
            );
          default:
            return element;
        }
      })();
      const isHeader =
        route.navigation === ROUTE_NAVIGATION.LIST ||
        route.navigation === ROUTE_NAVIGATION.TRANSITION;
      const routeFF = {
        ...routeF,
        namespaces,
        routes: [
          {
            element: elementF,
            header: isHeader ? merge([header, { previous: 1 }]) : header,
            isNavigatable: false,
            namespaces,
            pathname: '/',
            title,
          },
          ...(routes?.map((child) =>
            merge([
              child,
              {
                header: isHeader
                  ? merge([{ previous: route.navigation === ROUTE_NAVIGATION.TAB ? 2 : 1 }, header])
                  : header,
                namespaces,
                title: child.title ?? child.pathname,
              },
            ]),
          ) ?? []),
        ],
        title,
        transition: ROUTE_TRANSITION.SLIDE,
      } satisfies RouteModel;
      return routeFF;
    }
    default:
      return route;
  }
};

const getRoute = (route: RouteModel, depth = 0): RouteModel => {
  let routeF = getNavigatableRoute(route);
  const pathnameF = trimPathname(trimEnd(routeF.pathname, '/*'));
  const depthF = pathnameF === '/' ? depth : depth + 1;
  const parentF = trimPathname(`${routeF.parent ?? ''}${pathnameF}`);
  routeF = {
    ...routeF,
    fullpath: trimPathname(`${routeF.parent ?? ''}/${pathnameF}`),
    pathname: trimPathname(routeF.routes ? `${pathnameF}/*` : pathnameF),
    routes: routeF.routes?.reduce((result, child) => {
      return [...result, getRoute({ ...child, parent: parentF }, depthF)];
    }, [] as Array<RouteModel>),
  };
  return {
    ...routeF,
    element: (
      <Route
        depth={depthF}
        route={routeF}
      />
    ),
  };
};

export const Router: LFCModel<RouterPropsModel> = ({ routes, ...props }) => {
  const { wrapperProps } = useLayoutStyles({ props });
  const routesF = useMemo(() => routes.map((route) => getRoute(route)), [routes]);
  return (
    <Wrapper
      {...wrapperProps}
      flex
      isOverflowHidden
      position={SHAPE_POSITION.RELATIVE}>
      <Routes routes={routesF} />
    </Wrapper>
  );
};
