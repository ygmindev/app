import { _config } from '#lib-config/locale/internationalize/internationalize.server';
import { trimPathname } from '#lib-frontend/route/utils/trimPathname/trimPathname';
import {
  type _ExportPrerenderModel,
  type _ExportPrerenderParamsModel,
} from '#lib-platform/web/exports/exportPrerender/_exportPrerender.models';
import { merge } from '#lib-shared/core/utils/merge/merge';
import { sequence } from '#lib-shared/core/utils/sequence/sequence';
import { LOCALE } from '#lib-shared/locale/locale.constants';
import { ROUTE } from '#lib-shared/route/route.constants';

export const _exportPrerender = ({
  languageDefault,
  languages,
}: _ExportPrerenderParamsModel): _ExportPrerenderModel => ({
  prerender: async ({ pageContexts }) => {
    const pageContextPromises: Array<() => Promise<(typeof pageContexts)[number]>> = [];
    languages.forEach((lang) =>
      pageContexts.forEach(({ context, urlOriginal, ...pageContext }) =>
        pageContextPromises.push(async () => {
          const i18n = _config();
          await i18n.changeLanguage(lang);
          const isLanguageDefault = lang === languageDefault;
          const pathname = trimPathname(
            isLanguageDefault ? urlOriginal : `/${lang}/${urlOriginal}`,
          );
          return {
            ...pageContext,
            context: merge([
              {
                [LOCALE]: { i18n, lang },
                [ROUTE]: { location: { pathname: trimPathname(urlOriginal) } },
              },
              context,
            ]),
            urlOriginal: pathname,
          };
        }),
      ),
    );
    return { prerenderContext: { pageContexts: await sequence(pageContextPromises) } };
  },
});
