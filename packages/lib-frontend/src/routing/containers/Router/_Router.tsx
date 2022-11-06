import type { SFCModel } from '@lib/frontend/core/core.models';
import type {
  _RouteModel,
  _RouterPropsModel,
} from '@lib/frontend/routing/containers/Router/_Router.models';
import {
  _Route,
  _Router as _RouterBase,
  _Routes,
} from '@lib/frontend/routing/containers/Router/_RouterBase';
import type { ReactElement } from 'react';

const RouteWithSubRoutes = ({
  element,
  isIndex,
  pathname,
  routes,
}: _RouteModel): ReactElement<_RouteModel> => (
  <_Route
    element={element}
    index={isIndex}
    key={pathname}
    path={pathname}>
    {(routes ? routes.map(RouteWithSubRoutes) : null) as never}
  </_Route>
);

export const _Router: SFCModel<_RouterPropsModel> = ({ routes }) => (
  <_RouterBase>
    <_Routes>{routes.map(RouteWithSubRoutes)}</_Routes>
  </_RouterBase>
);
