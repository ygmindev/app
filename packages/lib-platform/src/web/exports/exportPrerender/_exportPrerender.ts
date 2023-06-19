import { _config } from '#lib-config/locale/internationalize/internationalize.node';
import { trimPathname } from '#lib-frontend/route/utils/trimPathname/trimPathname';
import type {
  _ExportPrerenderModel,
  _ExportPrerenderParamsModel,
} from '#lib-platform/web/exports/exportPrerender/_exportPrerender.models';
import { merge } from '#lib-shared/core/utils/merge/merge';
import { LOCALE } from '#lib-shared/locale/locale.constants';

export const _exportPrerender = ({
  languageDefault,
  languages,
}: _ExportPrerenderParamsModel): _ExportPrerenderModel => ({
  prerender: async ({ pageContexts }) => {
    const pageContextsF: typeof pageContexts = [];
    languages.forEach((lang) =>
      pageContexts.forEach(({ context, urlOriginal, ...pageContext }) => {
        const i18n = _config();
        i18n.changeLanguage(lang);
        const isLanguageDefault = lang === languageDefault;
        pageContextsF.push({
          ...pageContext,
          context: merge([{ [LOCALE]: { i18n, lang } }, context]),
          urlOriginal: trimPathname(isLanguageDefault ? urlOriginal : `/${lang}/${urlOriginal}`),
        });
      }),
    );
    return { prerenderContext: { pageContexts: pageContextsF } };
  },
});
