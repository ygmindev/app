import trimEnd from 'lodash/trimEnd';

import type { RouteModel } from '#lib-frontend/route/route.models';
import { trimPathname } from '#lib-frontend/route/utils/trimPathname/trimPathname';
import { _exportPrerenderPages } from '#lib-platform/web/exports/exportPrerenderPages/_exportPrerenderPages';
import type { _ExportPrerenderPagesParamsModel } from '#lib-platform/web/exports/exportPrerenderPages/_exportPrerenderPages.models';
import type {
  ExportPrerenderPagesModel,
  ExportPrerenderPagesParamsModel,
} from '#lib-platform/web/exports/exportPrerenderPages/exportPrerenderPages.models';

const _getPrerenderPathnames = (
  routes?: Array<RouteModel>,
): _ExportPrerenderPagesParamsModel['pages'] =>
  routes?.reduce((result, route) => {
    const pathname = trimPathname(`${route.root ?? ''}/${trimEnd(route.pathname, '/*')}`);
    const resultF = [
      ...result,
      ...(route.routes
        ? _getPrerenderPathnames(
            route.routes.map(({ ...routeChild }) => ({ ...routeChild, root: pathname })),
          )
        : []),
    ];
    // TODO: add async context per page if needed
    return !route.isClientOnly ? resultF : [...resultF, { getContext: undefined, pathname }];
  }, [] as _ExportPrerenderPagesParamsModel['pages']) || [];

export const exportPrerenderPages = ({
  routes,
}: ExportPrerenderPagesParamsModel): ExportPrerenderPagesModel =>
  _exportPrerenderPages({ pages: _getPrerenderPathnames(routes) });
