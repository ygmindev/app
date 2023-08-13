import { ROUTE_DIRECTION, ROUTE_TRANSITION } from '#lib-frontend/route/route.constants';
import {
  type GetRouteGroupModel,
  type GetRouteGroupParamsModel,
} from '#lib-frontend/route/utils/getRouteGroup/getRouteGroup.models';
import { merge } from '#lib-shared/core/utils/merge/merge';

export const getRouteGroup = ({
  element,
  header,
  ns,
  pathname,
  routes,
  title,
}: GetRouteGroupParamsModel): GetRouteGroupModel => {
  const headerF = merge([header, { previous: ROUTE_DIRECTION.UP }]);
  return {
    ns,
    pathname,
    routes: [
      { element, header: headerF, pathname: '/', title },
      ...(routes ? routes.map((route) => merge([route, { header: headerF }])) : []),
    ],
    transition: ROUTE_TRANSITION.SLIDE,
  };
};
