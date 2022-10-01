import type { SFCModel } from '@lib/frontend/core/core.models';
import type { _RouterPropsModel } from '@lib/frontend/routing/containers/Router/_Router.models';
import {
  _Outlet,
  _Route,
  _Router as _RouterBase,
  _Routes,
} from '@lib/frontend/routing/containers/Router/_RouterBase';
import type { RouteModel } from '@lib/frontend/routing/containers/Router/Router.models';
import { trimPathname } from '@lib/frontend/routing/utils/trimPathname/trimPathname';
import type { ReactElement } from 'react';
import { cloneElement } from 'react';

const RouteWithSubRoutes = ({
  Layout,
  element,
  pathname,
  routes,
}: RouteModel): ReactElement<RouteModel> => {
  const path = trimPathname(pathname);
  let _element = <>{element}</>;
  _element = routes ? cloneElement(_element, {}, <_Outlet />) : _element;
  _element = Layout ? <Layout>{_element}</Layout> : _element;
  return (
    <_Route
      element={_element}
      key={path}
      path={path}>
      {routes ? routes.map(RouteWithSubRoutes) : null}
    </_Route>
  );
};
export const _Router: SFCModel<_RouterPropsModel> = ({ routes }) => (
  <_RouterBase>
    <_Routes>{routes.map(RouteWithSubRoutes)}</_Routes>
  </_RouterBase>
);
