import { Wrapper } from '@lib/frontend/core/components/Wrapper/Wrapper';
import type { SFCModel } from '@lib/frontend/core/core.models';
import { Route } from '@lib/frontend/route/components/Route/Route';
import { _Router } from '@lib/frontend/route/containers/Router/_Router';
import type { RouterPropsModel } from '@lib/frontend/route/containers/Router/Router.models';
import type { RouteModel } from '@lib/frontend/route/route.models';
import { trimPathname } from '@lib/frontend/route/utils/trimPathname/trimPathname';
import { useStyles } from '@lib/frontend/style/hooks/useStyles/useStyles';
import { SHAPE_POSITION } from '@lib/frontend/style/utils/styler/shapeStyler/shapeStyler.constants';
import trimEnd from 'lodash/trimEnd';
import { useMemo } from 'react';

const getRoute = ({ pathname, ...route }: RouteModel, depth = 1): RouteModel => {
  const isLeaf = !route.routes;
  const root = trimEnd(pathname, '/*');
  const pathnameF = trimPathname(isLeaf ? pathname : `${root}/*`);
  const routeF: RouteModel = { ...route, pathname: pathnameF };
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
            <_Router
              depth={depth + 1}
              routes={routeF.routes.map((child) =>
                getRoute(
                  {
                    ...child,
                    header: child.header || routeF.header,
                    root: trimPathname(`${route.root ?? ''}/${root}`),
                    transition: child.transition || routeF.transition,
                  },
                  depth + 1,
                ),
              )}
            />
          </Wrapper>
        )}
      </Route>
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
      <_Router routes={routesF} />
    </Wrapper>
  );
};
