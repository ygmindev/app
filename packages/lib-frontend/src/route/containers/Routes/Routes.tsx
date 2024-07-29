import { type FCModel } from '@lib/frontend/core/core.models';
import { _Routes } from '@lib/frontend/route/containers/Routes/_Routes';
import { type RoutesPropsModel } from '@lib/frontend/route/containers/Routes/Routes.models';

export const Routes: FCModel<RoutesPropsModel> = ({ depth = 0, routes }) => (
  <_Routes
    depth={depth}
    routes={routes}
  />
);
