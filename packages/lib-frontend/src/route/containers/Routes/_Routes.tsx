import { Exitable } from '@lib/frontend/animation/components/Exitable/Exitable';
import type { FCModel } from '@lib/frontend/core/core.models';
import type { _RoutesPropsModel } from '@lib/frontend/route/containers/Routes/_Routes.models';
import { _Route, _Routes as _RoutesBase } from '@lib/frontend/route/containers/Routes/_RoutesBase';
import { useMemo } from 'react';
import { useLocation } from 'react-router';

export const _Routes: FCModel<_RoutesPropsModel> = ({ depth = 1, routes }) => {
  const location = useLocation();
  const key = useMemo(
    () => location.pathname.split('/').splice(1, depth).join('/'),
    [location.pathname, depth],
  );
  return (
    <Exitable>
      <_RoutesBase
        key={key}
        location={location}>
        {routes.map(({ element, pathname }) => (
          <_Route
            element={element}
            index={pathname === '/'}
            key={pathname}
            path={pathname}
          />
        ))}
      </_RoutesBase>
    </Exitable>
  );
};
