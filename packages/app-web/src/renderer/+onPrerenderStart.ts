import type { PageContextBuiltIn } from 'vite-plugin-ssr/types';

import { _config, config } from '#lib-config/locale/internationalize/internationalize.node';
import type { ExportRenderServerParamsModel } from '#lib-platform/web/exports/exportRendererServer/exportRendererServer.models';
import { LOCALE } from '#lib-shared/locale/locale.constants';

interface OnPrerenderStartParamsModel {
  pageContexts: Array<PageContextBuiltIn>;
}

interface OnPrerenderStartModel {
  prerenderContext: {
    pageContexts: Array<PageContextBuiltIn & ExportRenderServerParamsModel>;
  };
}

const onPrerenderStart = ({ pageContexts }: OnPrerenderStartParamsModel): OnPrerenderStartModel => {
  const pageContextsF: Array<PageContextBuiltIn & ExportRenderServerParamsModel> = [];
  const i18n = _config();
  config.languages.forEach((lang) =>
    pageContexts.forEach(({ urlOriginal, ...pageContext }) =>
      pageContextsF.push({
        ...pageContext,
        context: { [LOCALE]: { i18n, lang } },
        lang,
        urlOriginal: lang === config.languageDefault ? urlOriginal : `/${lang}/${urlOriginal}`,
      }),
    ),
  );
  return { prerenderContext: { pageContexts: pageContextsF } };
};

export default onPrerenderStart;
