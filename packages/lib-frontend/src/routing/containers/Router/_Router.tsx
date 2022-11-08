import type { FCModel } from '@lib/frontend/core/core.models';
import { useChange } from '@lib/frontend/core/hooks/useChange/useChange';
import { dispatch } from '@lib/frontend/root/stores/store/store';
import type {
  _RouteModel,
  _RouterPropsModel,
} from '@lib/frontend/routing/containers/Router/_Router.models';
import {
  _Route,
  _Router as _RouterBase,
  _Routes,
} from '@lib/frontend/routing/containers/Router/_RouterBase';
import { useRouter } from '@lib/frontend/routing/hooks/useRouter/useRouter';
import { routingActions } from '@lib/frontend/routing/stores/reducer/reducer';
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

const _RoutingProvider: FCModel<_RouterPropsModel> = ({ routes }) => {
  const { location } = useRouter();

  useChange({
    onChange: (value) => {
      value && dispatch(routingActions.setPrevious(value));
      dispatch(routingActions.setCurrent(location));
    },
    value: location,
  });

  return <_Routes>{routes.map(RouteWithSubRoutes)}</_Routes>;
};

export const _Router: FCModel<_RouterPropsModel> = ({ routes }) => (
  <_RouterBase>
    <_RoutingProvider routes={routes} />
  </_RouterBase>
);
