import { initialize } from '@lib/backend/setup/utils/initialize/initialize';
import { databaseConfig } from '@lib/config/database/database.mongo';
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
  ({ i18n, languageDefault, languages }: _PrerenderParamsModel): _PrerenderModel =>
  async ({ pageContexts }) => {
    // TODO: database should be per APP
    await initialize({ database: () => databaseConfig.params() });

    const pageContextPromises: Array<() => Promise<(typeof pageContexts)[number]>> = [];
    languages.forEach(({ id }) =>
      pageContexts.forEach(({ context, urlOriginal, ...pageContext }) =>
        pageContextPromises.push(async () => {
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
