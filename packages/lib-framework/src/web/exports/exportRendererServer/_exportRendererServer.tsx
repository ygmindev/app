import { getLocaleStoreFromI18n } from '@lib/framework/locale/utils/getLocaleStoreFromI18n/getLocaleStoreFromI18n';
import type {
  _ExportRendererServerModel,
  _ExportRendererServerParamsModel,
} from '@lib/framework/web/exports/exportRendererServer/_exportRendererServer.models';
import type { FCModel } from '@lib/frontend/core/core.models';
import type { RouteContextModel } from '@lib/frontend/route/route.models';
import { renderToPipeableStream, renderToStaticMarkup } from 'react-dom/server';
import { AppRegistry } from 'react-native-web';
import { dangerouslySkipEscape, escapeInject, stampPipe } from 'vite-plugin-ssr';

export const _exportRendererServer = ({
  publicDir,
  render,
  rootId,
}: _ExportRendererServerParamsModel): _ExportRendererServerModel => ({
  onBeforeRender: async () => {
    return {
      pageContext: {},
    };
  },

  passToClient: ['initialState', 'locale', 'pageProps'],

  render: async ({ Page, locale, pageProps, urlPathname }) => {
    const context: RouteContextModel = {};
    const App: FCModel = () =>
      render({
        children: <Page {...pageProps} />,
        locale,
        route: urlPathname ? { context, location: { pathname: urlPathname } } : undefined,
      });

    AppRegistry.registerComponent('App', () => App);
    const { element, getStyleElement } = AppRegistry.getApplication('App', {});
    const styleSheet = renderToStaticMarkup(getStyleElement());
    const { pipe } = renderToPipeableStream(element);
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
          <link rel="icon" type="image/svg+xml" href="${publicDir}/favico/favico.svg" />
          <title>${''}</title>
          <style>${dangerouslySkipEscape(styleSheet)}</style>
        </head>
        <body><div id="${rootId}">${pipe}</div></body>
      </html>
    `;

    return {
      documentHtml,

      pageContext: async () => ({
        enableEagerStreaming: true,
        locale: {
          lang: locale?.lang,
          store: locale?.i18n && getLocaleStoreFromI18n({ i18n: locale?.i18n }),
        },
        redirectTo: context.redirect,
      }),
    };
  },
});
