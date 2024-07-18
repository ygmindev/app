import { _routes } from '@lib/config/routes/_routes';
import { type FCModel } from '@lib/frontend/core/core.models';
import { type _RoutesPropsModel } from '@lib/frontend/route/containers/Routes/_Routes.models';
import { _Route, _Routes as _RoutesBase } from '@lib/frontend/route/containers/Routes/_RoutesBase';
import { useMemo } from 'react';
import { type RouteProps, useLocation } from 'react-router';

export const _Routes: FCModel<_RoutesPropsModel> = ({ depth = 1, routes }) => {
  const location = useLocation();
  const key = location.pathname
    .split('/')
    .splice(1, depth - 1)
    .join('/');
  const routesF = useMemo(() => _routes({ routes }), [routes]);
  return (
    <_RoutesBase
      key={key}
      location={location}>
      {routesF.map((route) => (
        <_Route {...(route as RouteProps)} />
      ))}
    </_RoutesBase>
  );
};
