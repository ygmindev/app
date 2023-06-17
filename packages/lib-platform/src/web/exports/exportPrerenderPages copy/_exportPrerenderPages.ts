import { trimPathname } from '#lib-frontend/route/utils/trimPathname/trimPathname';
import type {
  _ExportPrerenderPagesModel,
  _ExportPrerenderPagesParamsModel,
} from '#lib-platform/web/exports/exportPrerenderPages/_exportPrerenderPages.models';
import type { ReturnTypeModel } from '#lib-shared/core/core.models';
import { LOCALE } from '#lib-shared/locale/locale.constants';

export const _exportPrerenderPages = ({
  i18n,
  languageDefault,
  languages,
  pathnames,
}: _ExportPrerenderPagesParamsModel): _ExportPrerenderPagesModel => ({
  pages: async (_pageContext) => {
    const pages: ReturnTypeModel<_ExportPrerenderPagesModel['pages']> = [];
    languages.forEach((lang) =>
      pathnames.forEach((pathname) =>
        pages.push({
          pageContext: { context: { [LOCALE]: { i18n, lang } } },
          url: trimPathname(lang === languageDefault ? pathname : `/${lang}/${pathname}`),
        }),
      ),
    );
    return pages;
  },
});
