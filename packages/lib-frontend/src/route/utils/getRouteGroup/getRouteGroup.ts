import { ROUTE_TRANSITION } from '#lib-frontend/route/route.constants';
import {
  type GetRouteGroupModel,
  type GetRouteGroupParamsModel,
} from '#lib-frontend/route/utils/getRouteGroup/getRouteGroup.models';
import { merge } from '#lib-shared/core/utils/merge/merge';

export const getRouteGroup = ({
  element,
  header = { previous: true },
  ns,
  pathname,
  routes,
  title,
}: GetRouteGroupParamsModel): GetRouteGroupModel => ({
  header,
  ns,
  pathname,
  routes: [
    {
      element,
      // header,
      pathname: '/',
      title: ({ t }) => t('settings:settings'),
    },
    ...(routes ? routes.map((route) => merge([{ header: { previous: true } }, route])) : []),
  ],
  title,
  transition: ROUTE_TRANSITION.SLIDE,
});
