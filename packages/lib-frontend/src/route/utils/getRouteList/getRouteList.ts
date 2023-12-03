import { ROUTE_DIRECTION, ROUTE_TRANSITION } from '#lib-frontend/route/route.constants';
import {
  type GetRouteListModel,
  type GetRouteListParamsModel,
} from '#lib-frontend/route/utils/getRouteList/getRouteList.models';
import { merge } from '#lib-shared/core/utils/merge/merge';

export const getRouteList = ({
  element,
  header,
  routes,
  title,
  ...params
}: GetRouteListParamsModel): GetRouteListModel => {
  const headerF = merge([header, { previous: ROUTE_DIRECTION.UP }]);
  return {
    ...params,
    routes: [
      { element, isNavigatable: false, pathname: '/', title },
      ...(routes ? routes.map((route) => merge([route, { header: headerF }])) : []),
    ],
    title,
    transition: ROUTE_TRANSITION.SLIDE,
  };
};
