import type { FCModel } from '@lib/frontend/core/core.models';
import type {
  _RouteComponentModel,
  _RouterPropsModel,
} from '@lib/frontend/routing/containers/Router/_Router.models';
import { _Route, _Routes } from '@lib/frontend/routing/containers/Router/_RouterBase';
import type { ReactElement } from 'react';

const RouteWithSubRoutes = ({
  element,
  isIndex,
  pathname,
  routes,
}: _RouteComponentModel): ReactElement<_RouteComponentModel> => (
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
