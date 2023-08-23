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
      let pathnameF = trimPathname(`${route.parent ?? ''}/${trimEnd(route.pathname, '/*')}`);
      pathnameF = pathnameF.replace(/\/:[^\/]+/, '');
      const resultF = [
        ...result,
        ...(route.routes
          ? pages(route.routes.map(({ ...child }) => ({ ...child, root: pathnameF })))
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
              pathname: trimPathname(`${pathnameF}/${value}`),
            }))
          : [{ getContext: undefined, pathname: pathnameF }]),
      ];
    },
    [] as _PreparePrerenderParamsModel['pages'],
  ) ?? [];

export const preparePrerender = ({ routes }: PreparePrerenderParamsModel): PreparePrerenderModel =>
  _preparePrerender({ pages: pages(routes) });
