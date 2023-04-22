import { Exitable } from '@lib/frontend/animation/components/Exitable/Exitable';
import type { FCModel } from '@lib/frontend/core/core.models';
import type { _RouterPropsModel } from '@lib/frontend/route/containers/Router/_Router.models';
import { _Route, _Routes } from '@lib/frontend/route/containers/Router/_RouterBase';
import { useMemo } from 'react';
import { useLocation } from 'react-router';

export const _Router: FCModel<_RouterPropsModel> = ({ depth = 1, routes }) => {
  const location = useLocation();
  const key = useMemo(
    () => location.pathname.split('/').splice(1, depth).join('/'),
    [location.pathname, depth],
  );
  return (
    <Exitable>
      <_Routes
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
      </_Routes>
    </Exitable>
  );
};
