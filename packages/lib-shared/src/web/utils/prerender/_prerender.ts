import { _config } from '@lib/config/locale/internationalize/internationalize.server';
import { trimPathname } from '@lib/frontend/route/utils/trimPathname/trimPathname';
import { mapSequence } from '@lib/shared/core/utils/mapSequence/mapSequence';
import { merge } from '@lib/shared/core/utils/merge/merge';
import { LOCALE } from '@lib/shared/locale/locale.constants';
import { ROUTE } from '@lib/shared/route/route.constants';
import {
  type _PrerenderModel,
  type _PrerenderParamsModel,
} from '@lib/shared/web/utils/prerender/_prerender.models';

export const _prerender =
  ({ languageDefault, languages }: _PrerenderParamsModel): _PrerenderModel =>
  async ({ pageContexts }) => {
    const pageContextPromises: Array<() => Promise<(typeof pageContexts)[number]>> = [];
    languages.forEach(({ id }) =>
      pageContexts.forEach(({ context, urlOriginal, ...pageContext }) =>
        pageContextPromises.push(async () => {
          const i18n = _config();
          await i18n.changeLanguage(id);
          const isLanguageDefault = id === languageDefault;
          const pathname = trimPathname(isLanguageDefault ? urlOriginal : `/${id}/${urlOriginal}`);
          return {
            ...pageContext,
            context: merge([
              {
                [LOCALE]: { i18n, lang: id },
                [ROUTE]: { location: { pathname: trimPathname(urlOriginal) } },
              },
              context,
            ]),
            urlOriginal: pathname,
          };
        }),
      ),
    );
    return { prerenderContext: { pageContexts: await mapSequence(pageContextPromises) } };
  };
