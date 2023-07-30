import isArray from 'lodash/isArray';
import trimEnd from 'lodash/trimEnd';

import { type RouteModel } from '#lib-frontend/route/route.models';
import { trimPathname } from '#lib-frontend/route/utils/trimPathname/trimPathname';
import { _preparePrerender } from '#lib-platform/web/exports/preparePrerender/_preparePrerender';
import { type _PreparePrerenderParamsModel } from '#lib-platform/web/exports/preparePrerender/_preparePrerender.models';
import {
  type PreparePrerenderModel,
  type PreparePrerenderParamsModel,
} from '#lib-platform/web/exports/preparePrerender/preparePrerender.models';

const pages = (routes?: Array<RouteModel>): _PreparePrerenderParamsModel['pages'] =>
  routes?.reduce(
    (result, route) => {
      if (route.prerender === false) {
        return result;
      }
      const pathname = trimPathname(`${route.root ?? ''}/${trimEnd(route.pathname, '/*')}`);
      const resultF = [
        ...result,
        ...(route.routes
          ? pages(route.routes.map(({ ...child }) => ({ ...child, root: pathname })))
          : []),
      ];
      // TODO: add async context per page if needed
      return [
        ...resultF,
        ...(route.routes
          ? []
          : isArray(route.prerender)
          ? route.prerender.map((value) => ({
              getContext: undefined,
              pathname: trimPathname(`${pathname}/${value}`),
            }))
          : [{ getContext: undefined, pathname }]),
      ];
    },
    [] as _PreparePrerenderParamsModel['pages'],
  ) ?? [];

export const preparePrerender = ({ routes }: PreparePrerenderParamsModel): PreparePrerenderModel =>
  _preparePrerender({ pages: pages(routes) });
