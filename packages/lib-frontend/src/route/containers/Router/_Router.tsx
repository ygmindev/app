import type { FCModel } from '@lib/frontend/core/core.models';
import type { _RouterPropsModel } from '@lib/frontend/route/containers/Router/_Router.models';
import { _Route, _Routes } from '@lib/frontend/route/containers/Router/_RouterBase';
import { useLocation } from 'react-router';

export const _Router: FCModel<_RouterPropsModel> = ({ routes }) => {
  const location = useLocation();
  return (
    <_Routes
      key={location.key}
      location={location}>
      {routes.map(({ element, isIndex, pathname }) => (
        <_Route
          element={element}
          index={isIndex}
          key={pathname}
          path={pathname}
        />
      ))}
    </_Routes>
  );
};
