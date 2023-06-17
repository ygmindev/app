import type { PageContextBuiltIn } from 'vite-plugin-ssr/types';

import type { ExportRenderServerParamsModel } from '#lib-platform/web/exports/exportRendererServer/exportRendererServer.models';
import { merge } from '#lib-shared/core/utils/merge/merge';
import { LOCALE } from '#lib-shared/locale/locale.constants';

type OnPrerenderStartParamsModel = {
  pageContexts: Array<PageContextBuiltIn>;
};

type OnPrerenderStartModel = {
  prerenderContext: {
    pageContexts: Array<PageContextBuiltIn & ExportRenderServerParamsModel>;
  };
};

const onPrerenderStart = ({ pageContexts }: OnPrerenderStartParamsModel): OnPrerenderStartModel => {
  const pageContextsF: Array<PageContextBuiltIn & ExportRenderServerParamsModel> = [];
  // const i18n = _config();
  ['en', 'kr'].forEach((lang) =>
    pageContexts.forEach(({ urlOriginal, ...pageContext }) =>
      pageContextsF.push(
        merge<PageContextBuiltIn & ExportRenderServerParamsModel>([
          {
            context: { [LOCALE]: { lang } },
            urlOriginal: lang === 'en' ? urlOriginal : `/${lang}/${urlOriginal}`,
          },
          pageContext,
        ]),
      ),
    ),
  );
  return { prerenderContext: { pageContexts: pageContextsF } };
};

export default onPrerenderStart;

// import type { PageContextBuiltIn } from 'vite-plugin-ssr/types';

// import { config } from '#lib-config/locale/internationalize/internationalize.node';
// import type { ExportRenderServerParamsModel } from '#lib-platform/web/exports/exportRendererServer/exportRendererServer.models';

// interface OnPrerenderStartParamsModel {
//   pageContexts: Array<PageContextBuiltIn>;
// }

// interface OnPrerenderStartModel {
//   prerenderContext: {
//     pageContexts: Array<PageContextBuiltIn & ExportRenderServerParamsModel>;
//   };
// }

// const onPrerenderStart = ({ pageContexts }: OnPrerenderStartParamsModel): OnPrerenderStartModel => {
//   const pageContextsF: Array<PageContextBuiltIn & ExportRenderServerParamsModel> = [];
//   // const i18n = _config();
//   config.languages.forEach((lang) =>
//     pageContexts.forEach(({ urlOriginal, ...pageContext }) =>
//       pageContextsF.push({
//         ...pageContext,
//         // context: { [LOCALE]: { i18n, lang } },
//         lang,
//         urlOriginal: lang === config.languageDefault ? urlOriginal : `/${lang}/${urlOriginal}`,
//       }),
//     ),
//   );
//   return { prerenderContext: { pageContexts: pageContextsF } };
// };

// export default onPrerenderStart;
