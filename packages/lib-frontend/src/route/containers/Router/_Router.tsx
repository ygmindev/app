import type { FCModel } from '@lib/frontend/core/core.models';
import type { _RouterPropsModel } from '@lib/frontend/route/containers/Router/_Router.models';
import { _Route, _Routes } from '@lib/frontend/route/containers/Router/_RouterBase';
import type { RouteModel } from '@lib/frontend/route/route.models';
import type { ReactElement } from 'react';

const RouteWithSubRoutes = ({
  element,
  isIndex,
  pathname,
  routes,
}: RouteModel): ReactElement<RouteModel> => (
  <_Route
    element={element}
    index={isIndex}
    key={pathname}
    path={pathname}>
    {(routes ? routes.map(RouteWithSubRoutes) : null) as never}
  </_Route>
);

export const _Router: FCModel<_RouterPropsModel> = ({ routes }) => (
  <_Routes>{routes.map(RouteWithSubRoutes)}</_Routes>
);
