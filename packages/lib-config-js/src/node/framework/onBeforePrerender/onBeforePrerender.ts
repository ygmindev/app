import { _onBeforePrerender } from '@lib/config/node/framework/onBeforePrerender/_onBeforePrerender';
import {
  type OnBeforePrerenderModel,
  type OnBeforePrerenderParamsModel,
} from '@lib/config/node/framework/onBeforePrerender/onBeforePrerender.models';
import { type RouteModel } from '@lib/frontend/route/route.models';
import { trimPathname } from '@lib/frontend/route/utils/trimPathname/trimPathname';
import { isArray } from '@lib/shared/core/utils/isArray/isArray';
import trimEnd from 'lodash/trimEnd';

const getPrerenderRoutes = (routes?: Array<RouteModel>): Array<RouteModel> => {
  const prerenderRoutes =
    routes?.reduce((result, route) => {
      if (route.isProtectable) return result;
      if (route.routes || route.prerender) {
        const pathnameF = trimPathname(`${route.parent ?? ''}/${trimEnd(route.pathname, '/*')}`);
        return [
          ...result,
          ...(pathnameF.includes(':') && isArray(route.prerender)
            ? route.prerender.map((v) => ({ pathname: pathnameF.replace(/\/:[^/]+/, v) }))
            : route.routes
              ? getPrerenderRoutes(route.routes.map((v) => ({ ...v, parent: pathnameF })))
              : [{ ...route, pathname: pathnameF }]),
        ];
      }
      return result;
    }, [] as Array<RouteModel>) ?? [];
  return prerenderRoutes;
};

export const onBeforePrerender = ({
  routes,
}: OnBeforePrerenderParamsModel): OnBeforePrerenderModel =>
  _onBeforePrerender({ routes: getPrerenderRoutes(routes) });
