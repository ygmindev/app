import { RouteList } from '@lib/frontend/route/components/RouteList/RouteList';
import { ROUTE_NAVIGATION } from '@lib/frontend/route/route.constants';
import { type RouteModel } from '@lib/frontend/route/route.models';
import { trimRoute as trimRouteBase } from '@lib/shared/route/utils/trimRoutes/trimRoute.base';

export const trimRoute = (route: RouteModel, depth = 0): RouteModel => {
  route.navigation === ROUTE_NAVIGATION.LIST &&
    (route.element = (
      <RouteList
        mTop
        root
        routes={route.routes}
      />
    ));
  return trimRouteBase(route, depth);
};
