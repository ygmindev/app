import { type FCModel } from '@lib/frontend/core/core.models';
import { type _RoutesPropsModel } from '@lib/frontend/route/containers/Routes/_Routes.models';
import { _Route, _Routes as _RoutesBase } from '@lib/frontend/route/containers/Routes/_RoutesBase';
import { trimPathname } from '@lib/frontend/route/utils/trimPathname/trimPathname';
import { useLocation } from 'react-router';

export const _Routes: FCModel<_RoutesPropsModel> = ({ depth = 1, routes }) => {
  const location = useLocation();
  const key = location.pathname
    .split('/')
    .splice(1, depth - 1)
    .join('/');
  return (
    <_RoutesBase
      key={key}
      location={location}>
      {routes.map((route) => {
        const pathnameF = trimPathname(route.routes ? `${route.pathname}/*` : route.pathname);
        return (
          <_Route
            element={route.element}
            index={pathnameF === '/'}
            key={pathnameF}
            path={pathnameF}
          />
        );
      })}
    </_RoutesBase>
  );
};
