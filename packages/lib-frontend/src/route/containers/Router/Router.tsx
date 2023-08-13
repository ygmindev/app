import trimEnd from 'lodash/trimEnd';
import { useMemo } from 'react';

import { Wrapper } from '#lib-frontend/core/components/Wrapper/Wrapper';
import { type SFCModel } from '#lib-frontend/core/core.models';
import { Route } from '#lib-frontend/route/components/Route/Route';
import { type RouterPropsModel } from '#lib-frontend/route/containers/Router/Router.models';
import { Routes } from '#lib-frontend/route/containers/Routes/Routes';
import { type RouteModel } from '#lib-frontend/route/route.models';
import { trimPathname } from '#lib-frontend/route/utils/trimPathname/trimPathname';
import { useStyles } from '#lib-frontend/style/hooks/useStyles/useStyles';
import { SHAPE_POSITION } from '#lib-frontend/style/utils/styler/shapeStyler/shapeStyler.constants';

const getRoute = ({ pathname = '/', ...route }: RouteModel, depth = 0): RouteModel => {
  const pathnameEnd = trimEnd(pathname, '/*');
  const pathnameF = trimPathname(route.routes ? `${pathnameEnd}/*` : pathname);
  const depthF = pathnameF === '/' ? depth : depth + 1;
  const rootF = trimPathname(`${route.root ?? ''}/${pathnameEnd}`);
  const routeF: RouteModel = {
    ...route,
    fullpath: trimPathname(`${route.root ?? ''}/${pathnameF}`),
    pathname: pathnameF,
    routes: route.routes?.map((child) => getRoute({ ...child, root: rootF }, depthF)),
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

export const Router: SFCModel<RouterPropsModel> = ({ routes, testID, ...props }) => {
  const { styles } = useStyles({ props });
  const routesF = useMemo(() => routes.map((route) => getRoute(route)), [routes]);
  return (
    <Wrapper
      grow
      isOverflowHidden
      position={SHAPE_POSITION.RELATIVE}
      style={styles}
      testID={testID}>
      <Routes routes={routesF} />
    </Wrapper>
  );
};
