import { Exitable } from '@lib/frontend/animation/components/Exitable/Exitable';
import type { FCModel, PropsModel } from '@lib/frontend/core/core.models';
import type { _RouterPropsModel } from '@lib/frontend/route/containers/Router/_Router.models';
import { _Route, _Routes } from '@lib/frontend/route/containers/Router/_RouterBase';
import type { RouteModel } from '@lib/frontend/route/route.models';
import type { ReactElement } from 'react';
import { useLocation } from 'react-router';

const RouteWithSubRoutes = ({
  element,
  isIndex,
  pathname,
  routes,
}: RouteModel): ReactElement<PropsModel<typeof _Route>> => (
  <_Route
    element={routes ? <_Router routes={routes} /> : element}
    index={isIndex}
    key={pathname}
    path={routes ? `${pathname}/*` : pathname}
  />
);

export const _Router: FCModel<_RouterPropsModel> = ({ routes }) => {
  const location = useLocation();
  return (
    <Exitable>
      <_Routes
        key={location.key}
        location={location}>
        {routes.map(RouteWithSubRoutes)}
      </_Routes>
    </Exitable>
  );
};
