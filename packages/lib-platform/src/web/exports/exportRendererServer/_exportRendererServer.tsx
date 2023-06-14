import type { RootContextModel } from '#lib-frontend/root/root.models';
import { ROOT_REDUCERS } from '#lib-frontend/root/stores/rootStore.constants';
import type { RootStateContextModel } from '#lib-frontend/root/stores/rootStore.models';
import { Store } from '#lib-frontend/state/utils/Store/Store';
import { LOCALE } from '#lib-shared/locale/locale.constants';
import { STATE } from '#lib-shared/state/state.constants';
import pick from 'lodash/pick';
import ReactDOMServer from 'react-dom/server';
import { dangerouslySkipEscape, escapeInject, stampPipe } from 'vite-plugin-ssr/server';

import { getLocaleStoreFromI18n } from '#lib-platform/locale/utils/getLocaleStoreFromI18n/getLocaleStoreFromI18n';
import type {
  _ExportRendererServerModel,
  _ExportRendererServerParamsModel,
} from '#lib-platform/web/exports/exportRendererServer/_exportRendererServer.models';

export const _exportRendererServer = ({
  publicDir,
  render,
  rootId,
  ssrContextKeys,
}: _ExportRendererServerParamsModel): _ExportRendererServerModel => ({
  render: async ({ Page, context, pageProps }) => {
    const store = new Store({ cookies: context?.state?.cookies, reducers: ROOT_REDUCERS });
    const contextF: RootContextModel = {
      ...context,
      [STATE]: { initialState: await store.getState() } as RootStateContextModel,
    };
    const { element, getCss } = render({ children: <Page {...pageProps} />, context: contextF });
    const styleSheet = ReactDOMServer.renderToStaticMarkup(getCss());
    const { pipe } = ReactDOMServer.renderToPipeableStream(element);
    stampPipe(pipe, 'node-stream');

    // TODO: fill in description and title
    const documentHtml = escapeInject`
      <!DOCTYPE html>
      <html>
        <head>
          <script>const global = globalThis;</script>
          <meta charset="UTF-8" />
          <meta name="viewport" content="width=device-width" />
          <meta name="description" content="${''}" />
          <link rel="icon" type="image/svg+xml" href="/${publicDir}/favico/favico.svg" />
          <title>${''}</title>
          <style>${dangerouslySkipEscape(styleSheet)}</style>
        </head>
        <body><div id="${rootId}">${pipe}</div></body>
      </html>
    `;

    return {
      documentHtml,

      pageContext: async () => {
        const i18n = context?.locale?.i18n;
        const pageContext: RootContextModel = {
          ...context,
          [LOCALE]: i18n ? { i18n, store: getLocaleStoreFromI18n({ i18n }) } : undefined,
        };
        return {
          context: ssrContextKeys && pick(pageContext, ssrContextKeys),
          enableEagerStreaming: true,
          redirectTo: pageContext.route?.redirect,
        };
      },
    };
  },
});
