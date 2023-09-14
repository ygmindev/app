import trimEnd from 'lodash/trimEnd';
import { useMemo } from 'react';

import { Wrapper } from '#lib-frontend/core/components/Wrapper/Wrapper';
import { type LFCModel } from '#lib-frontend/core/core.models';
import { Route } from '#lib-frontend/route/components/Route/Route';
import { type RouterPropsModel } from '#lib-frontend/route/containers/Router/Router.models';
import { Routes } from '#lib-frontend/route/containers/Routes/Routes';
import { type RouteModel } from '#lib-frontend/route/route.models';
import { trimPathname } from '#lib-frontend/route/utils/trimPathname/trimPathname';
import { useLayoutStyles } from '#lib-frontend/style/hooks/useLayoutStyles/useLayoutStyles';
import { SHAPE_POSITION } from '#lib-frontend/style/utils/styler/shapeStyler/shapeStyler.constants';

const getRoute = (
  { pathname = '/', ...route }: RouteModel,
  depth = 0,
  rootRoutes: Array<RouteModel> = [],
): RouteModel => {
  const pathnameF = trimPathname(trimEnd(pathname, '/*'));
  const depthF = pathnameF === '/' ? depth : depth + 1;
  const parentF = trimPathname(`${route.parent ?? ''}${pathnameF}`);
  const routeF: RouteModel = {
    ...route,
    fullpath: trimPathname(`${route.parent ?? ''}/${pathnameF}`),
    pathname: trimPathname(route.routes ? `${pathnameF}/*` : pathnameF),
    routes: route.routes?.reduce((result, child) => {
      const childRoute = getRoute({ ...child, parent: parentF }, depthF, rootRoutes);
      if (childRoute.isFullScreen) {
        rootRoutes.push({
          ...childRoute,
          pathname: childRoute.fullpath ?? childRoute.pathname,
        });
        return result;
      }
      return [...result, childRoute];
    }, [] as Array<RouteModel>),
  };
  if (routeF.isRoot && routeF.routes) {
    routeF.routes = [...rootRoutes, ...routeF.routes];
  }
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
