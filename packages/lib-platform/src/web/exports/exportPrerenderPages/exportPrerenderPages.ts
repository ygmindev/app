import { config } from '#lib-config/locale/internationalize/internationalize.base';
import { _config } from '#lib-config/locale/internationalize/internationalize.node';
import { trimPathname } from '#lib-frontend/route/utils/trimPathname/trimPathname';
import { _exportPrerenderPages } from '#lib-platform/web/exports/exportPrerenderPages/_exportPrerenderPages';
import type { _ExportPrerenderPagesParamsModel } from '#lib-platform/web/exports/exportPrerenderPages/_exportPrerenderPages.models';
import type {
  ExportPrerenderPagesModel,
  ExportPrerenderPagesParamsModel,
} from '#lib-platform/web/exports/exportPrerenderPages/exportPrerenderPages.models';
import { LOCALE } from '#lib-shared/locale/locale.constants';

const { languageDefault, languages } = config;

export const exportPrerenderPages = ({
  pathnames,
}: ExportPrerenderPagesParamsModel): ExportPrerenderPagesModel => {
  const i18n = _config();
  const params: _ExportPrerenderPagesParamsModel = { pages: [] };
  languages.forEach((lang) =>
    pathnames?.forEach((pathname) =>
      params.pages.push({
        context: { [LOCALE]: { i18n, lang } },
        pathname: trimPathname(lang === languageDefault ? pathname : `/${lang}/${pathname}`),
      }),
    ),
  );
  return _exportPrerenderPages(params);
};
