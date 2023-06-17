import trimEnd from 'lodash/trimEnd';

import { config } from '#lib-config/locale/internationalize/internationalize.base';
import { _config } from '#lib-config/locale/internationalize/internationalize.node';
import type { RouteModel } from '#lib-frontend/route/route.models';
import { trimPathname } from '#lib-frontend/route/utils/trimPathname/trimPathname';
import { _exportPrerenderPages } from '#lib-platform/web/exports/exportPrerenderPages/_exportPrerenderPages';
import type { _ExportPrerenderPagesParamsModel } from '#lib-platform/web/exports/exportPrerenderPages/_exportPrerenderPages.models';
import type {
  ExportPrerenderPagesModel,
  ExportPrerenderPagesParamsModel,
} from '#lib-platform/web/exports/exportPrerenderPages/exportPrerenderPages.models';
import { LOCALE } from '#lib-shared/locale/locale.constants';

const { languageDefault, languages } = config;

const _getPrerenderPathnames = (routes?: Array<RouteModel>): Array<string> =>
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
    return route.isPrerender ? [...resultF, pathname] : resultF;
  }, [] as Array<string>) || [];

export const exportPrerenderPages = ({
  routes,
}: ExportPrerenderPagesParamsModel): ExportPrerenderPagesModel => {
  const i18n = _config();
  const pages: _ExportPrerenderPagesParamsModel['pages'] = [];
  const pathnames = _getPrerenderPathnames(routes);
  console.warn(pathnames);
  languages.forEach((lang) =>
    pathnames.forEach((pathname) =>
      pages.push({
        context: { [LOCALE]: { i18n, lang } },
        pathname: trimPathname(lang === languageDefault ? pathname : `/${lang}/${pathname}`),
      }),
    ),
  );
  return _exportPrerenderPages({ pages });
};
