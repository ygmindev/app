import trimEnd from 'lodash/trimEnd';
import { useMemo } from 'react';

import { Wrapper } from '#lib-frontend/core/components/Wrapper/Wrapper';
import type { SFCModel } from '#lib-frontend/core/core.models';
import { Route } from '#lib-frontend/route/components/Route/Route';
import { _Routes } from '#lib-frontend/route/containers/Routes/_Routes';
import type { RoutesPropsModel } from '#lib-frontend/route/containers/Routes/Routes.models';
import type { RouteModel } from '#lib-frontend/route/route.models';
import { trimPathname } from '#lib-frontend/route/utils/trimPathname/trimPathname';
import { useStyles } from '#lib-frontend/style/hooks/useStyles/useStyles';
import { SHAPE_POSITION } from '#lib-frontend/style/utils/styler/shapeStyler/shapeStyler.constants';

const getRoute = ({ pathname, ...route }: RouteModel, depth = 0): RouteModel => {
  const isLeaf = !route.routes;
  const root = trimEnd(pathname, '/*');
  const pathnameF = trimPathname(isLeaf ? pathname : `${root}/*`);
  const routeF: RouteModel = { ...route, pathname: pathnameF };
  const depthChildren = pathnameF !== '/' ? depth + 1 : depth;
  return {
    ...routeF,
    element: (
      <Route route={routeF}>
        {routeF.element?.props.children}

        {routeF.routes && (
          <Wrapper
            grow
            isOverflowHidden
            position={SHAPE_POSITION.RELATIVE}>
            <_Routes
              depth={depthChildren}
              routes={routeF.routes.map((child) =>
                getRoute(
                  {
                    ...child,
                    header: child.header || routeF.header,
                    root: trimPathname(`${route.root ?? ''}/${root}`),
                    transition: child.transition || routeF.transition,
                  },
                  depthChildren,
                ),
              )}
            />
          </Wrapper>
        )}
      </Route>
    ),
  };
};

export const Routes: SFCModel<RoutesPropsModel> = ({ routes, testID, ...props }) => {
  const { styles } = useStyles({ props });
  const routesF = useMemo(() => routes.map((route) => getRoute(route)), [routes]);
  return (
    <Wrapper
      grow
      isOverflowHidden
      position={SHAPE_POSITION.RELATIVE}
      style={styles}
      testID={testID}>
      <_Routes routes={routesF} />
    </Wrapper>
  );
};
