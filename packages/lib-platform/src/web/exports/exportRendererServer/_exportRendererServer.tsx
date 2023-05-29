import type { FCModel } from '@lib/frontend/core/core.models';
import { ROOT } from '@lib/frontend/root/root.constants';
import type { RootContextModel } from '@lib/frontend/root/root.models';
import { ROOT_REDUCERS } from '@lib/frontend/root/stores/rootStore.constants';
import type { RootStateContextModel } from '@lib/frontend/root/stores/rootStore.models';
import { Store } from '@lib/frontend/state/utils/Store/Store';
import { getLocaleStoreFromI18n } from '@lib/platform/locale/utils/getLocaleStoreFromI18n/getLocaleStoreFromI18n';
import type {
  _ExportRendererServerModel,
  _ExportRendererServerParamsModel,
} from '@lib/platform/web/exports/exportRendererServer/_exportRendererServer.models';
import { LOCALE } from '@lib/shared/locale/locale.constants';
import { STATE } from '@lib/shared/state/state.constants';
import pick from 'lodash/pick';
import ReactDOMServer from 'react-dom/server';
import { AppRegistry } from 'react-native-web';
import { dangerouslySkipEscape, escapeInject, stampPipe } from 'vite-plugin-ssr/server';

export const _exportRendererServer = ({
  publicDir,
  render,
  ssrContextKeys,
}: _ExportRendererServerParamsModel): _ExportRendererServerModel => ({
  onBeforeRender: async () => {
    return {
      pageContext: {},
    };
  },

  passToClient: ['pageProps', 'context'],

  render: async ({ Page, context, pageProps }) => {
    const _store = new Store({ cookies: context?.state?.cookies, reducers: ROOT_REDUCERS });
    const _context: RootContextModel = {
      ...context,
      [STATE]: { initialState: await _store.getState() } as RootStateContextModel,
    };
    const App: FCModel = () => render({ children: <Page {...pageProps} />, context: _context });
    AppRegistry.registerComponent('App', () => App);
    const { element, getStyleElement } = AppRegistry.getApplication('App', {});
    const styleSheet = ReactDOMServer.renderToStaticMarkup(getStyleElement());
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
        <body><div id="${ROOT}">${pipe}</div></body>
      </html>
    `;

    return {
      documentHtml,

      pageContext: async () => {
        const _i18n = context?.locale?.i18n;
        const _pageContext: RootContextModel = {
          ...context,
          [LOCALE]: _i18n
            ? { i18n: _i18n, store: getLocaleStoreFromI18n({ i18n: _i18n }) }
            : undefined,
        };
        return {
          context: ssrContextKeys && pick(_pageContext, ssrContextKeys),
          enableEagerStreaming: true,
          redirectTo: _pageContext.route?.redirect,
        };
      },
    };
  },
});
