import { type RouteModel } from '@lib/frontend/route/route.models';
import { trimPathname } from '@lib/frontend/route/utils/trimPathname/trimPathname';
import { _preparePrerender } from '@lib/shared/web/utils/preparePrerender/_preparePrerender';
import { type _PreparePrerenderParamsModel } from '@lib/shared/web/utils/preparePrerender/_preparePrerender.models';
import {
  type PreparePrerenderModel,
  type PreparePrerenderParamsModel,
} from '@lib/shared/web/utils/preparePrerender/preparePrerender.models';
import isArray from 'lodash/isArray';
import trimEnd from 'lodash/trimEnd';

const pages = (routes?: Array<RouteModel>): _PreparePrerenderParamsModel['pages'] =>
  routes?.reduce(
    (result, route) => {
      if (route.isProtectable || route.prerender === false) {
        return result;
      }
      const pathnameF = trimPathname(`${route.parent ?? ''}/${trimEnd(route.pathname, '/*')}`);
      if (pathnameF.includes(':')) {
        return [
          ...result,
          ...(Array.isArray(route.prerender)
            ? route.prerender.map((value) => ({
                getContext: undefined,
                pathname: pathnameF.replace(/\/:[^\/]+/, value),
              }))
            : []),
        ];
      }
      return [
        ...result,
        ...(route.routes
          ? pages(route.routes?.map(({ ...child }) => ({ ...child, parent: pathnameF })))
          : [{ getContext: undefined, pathname: pathnameF }]),
      ];
    },
    [] as _PreparePrerenderParamsModel['pages'],
  ) ?? [];

export const preparePrerender = ({ routes }: PreparePrerenderParamsModel): PreparePrerenderModel =>
  _preparePrerender({ pages: pages(routes) });
