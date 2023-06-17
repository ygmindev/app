import type {
  _ExportPrerenderPagesModel,
  _ExportPrerenderPagesParamsModel,
} from '#lib-platform/web/exports/exportPrerenderPages/_exportPrerenderPages.models';
import { LOCALE } from '#lib-shared/locale/locale.constants';

export const _exportPrerenderPages = ({
  i18n,
  languageDefault,
  languages,
  pathnames,
}: _ExportPrerenderPagesParamsModel): _ExportPrerenderPagesModel => {
  const pages: _ExportPrerenderPagesModel['pages'] = [];
  languages.forEach((lang) =>
    pathnames.forEach((pathname) =>
      pages.push({
        pageContext: { context: { [LOCALE]: { i18n, lang } } },
        url: lang === languageDefault ? pathname : `/${lang}/${pathname}`,
      }),
    ),
  );
  return { pages };
};
