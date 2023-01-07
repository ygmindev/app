import { Exitable } from '@lib/frontend/animation/components/Exitable/Exitable';
import type { FCModel } from '@lib/frontend/core/core.models';
import { Route } from '@lib/frontend/route/components/Route/Route';
import { _Router } from '@lib/frontend/route/containers/Router/_Router';
import type { RouterPropsModel } from '@lib/frontend/route/containers/Router/Router.models';
import type { RouteModel } from '@lib/frontend/route/route.models';
import { trimPathname } from '@lib/frontend/route/utils/trimPathname/trimPathname';
import { reduce } from 'lodash';
import { useMemo } from 'react';

const _getRoute = ({
  root = '/',
  routes,
}: {
  root?: string;
  routes?: Array<RouteModel>;
}): Array<RouteModel> =>
  reduce(
    routes,
    (result, { pathname = '/', ...route }) => {
      const _pathname = trimPathname(`${root}/${pathname}`);
      const _route: RouteModel = { ...route, pathname: _pathname };
      _route.routes && (_route.routes = _getRoute({ root: _pathname, routes: route.routes }));
      return [...result, { ..._route, element: <Route route={_route} /> }];
    },
    [] as Array<RouteModel>,
  );

export const Router: FCModel<RouterPropsModel> = ({ routes, ...props }) => {
  const _routes = useMemo(() => _getRoute({ routes }), [routes]);
  return (
    <Exitable>
      <_Router
        {...props}
        routes={_routes}
      />
    </Exitable>
  );
};
