import { Wrapper } from '@lib/frontend/core/components/Wrapper/Wrapper';
import type { SFCModel } from '@lib/frontend/core/core.models';
import { Route } from '@lib/frontend/route/components/Route/Route';
import { _Router } from '@lib/frontend/route/containers/Router/_Router';
import type { RouterPropsModel } from '@lib/frontend/route/containers/Router/Router.models';
import type { RouteModel } from '@lib/frontend/route/route.models';
import { trimPathname } from '@lib/frontend/route/utils/trimPathname/trimPathname';
import { useStyles } from '@lib/frontend/style/hooks/useStyles/useStyles';
import { SHAPE_POSITION } from '@lib/frontend/style/utils/styler/shapeStyler/shapeStyler.constants';
import { reduce } from 'lodash';
import { useMemo } from 'react';

const _getRoute = (routes?: Array<RouteModel>): Array<RouteModel> =>
  reduce(
    routes,
    (result, { pathname, ...route }) => {
      const _pathname = trimPathname(route.routes ? `${pathname}/*` : pathname);
      const _route: RouteModel = { ...route, pathname: _pathname };
      return [
        ...result,
        {
          ..._route,
          element: (
            <Route route={_route}>
              {_route.routes && <Router routes={_getRoute(route.routes)} />}
            </Route>
          ),
        },
      ];
    },
    [] as Array<RouteModel>,
  );

export const Router: SFCModel<RouterPropsModel> = ({ routes, testID, ...props }) => {
  const { styles } = useStyles({ props });
  const _routes = useMemo(() => _getRoute(routes), [routes]);
  return (
    <Wrapper
      grow
      isOverflowHidden
      position={SHAPE_POSITION.RELATIVE}
      style={styles}
      testID={testID}>
      <_Router routes={_routes} />
    </Wrapper>
  );
};
