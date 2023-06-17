import type {
  _ExportPrerenderModel,
  _ExportPrerenderParamsModel,
  _PageContextModel,
} from '#lib-platform/web/exports/exportPrerender/_exportPrerender.models';
import { merge } from '#lib-shared/core/utils/merge/merge';
import { LOCALE } from '#lib-shared/locale/locale.constants';

export const _exportPrerender = ({
  i18n,
  languageDefault,
  languages,
  pathnames,
}: _ExportPrerenderParamsModel): _ExportPrerenderModel => ({
  prerender: async (pageContext) => {
    const pageContexts: Array<_PageContextModel> = [];
    languages.forEach((lang) =>
      pathnames.forEach((pathname) =>
        pageContexts.push(
          merge<_PageContextModel>([
            {
              context: { [LOCALE]: { i18n, lang } },
              urlOriginal: lang === languageDefault ? pathname : `/${lang}/${pathname}`,
            },
            pageContext,
          ]),
        ),
      ),
    );
    return { prerenderContext: { pageContexts } };
  },
});
