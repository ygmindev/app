import { sheetConfig } from '@lib/config/style/sheet/sheet.config';
import type {
  _ExportRendererServerModel,
  _ExportRendererServerParamsModel,
} from '@lib/framework/web/exports/exportRendererServer/_exportRendererServer.models';
import type { FCModel } from '@lib/frontend/core/core.models';
import { renderToPipeableStream, renderToStaticMarkup } from 'react-dom/server';
import { AppRegistry } from 'react-native-web';
import { dangerouslySkipEscape, escapeInject, stampPipe } from 'vite-plugin-ssr';

export const _exportRendererServer = ({
  favicoPath,
  render,
  rootId,
}: _ExportRendererServerParamsModel): _ExportRendererServerModel => ({
  passToClient: ['pageProps'],

  render: async ({ Page, pageProps, urlPathname, ...ctx }) => {
    // console.warn(ctx);

    const App: FCModel = () =>
      render({
        children: <Page {...pageProps} />,
        location: urlPathname ? { pathname: urlPathname } : undefined,
      });

    AppRegistry.registerComponent('App', () => App);
    const { element, getStyleElement } = AppRegistry.getApplication('App', {});
    const styleSheet = renderToStaticMarkup(getStyleElement());

    const { pipe } = renderToPipeableStream(element);
    stampPipe(pipe, 'node-stream');
    const html = pipe;

    const documentHtml = escapeInject`
      <!DOCTYPE html>
      <html lang="${'en'}">
      <head>
          <script>const global = globalThis;</script>
          <meta charset="UTF-8" />
          <meta name="viewport" content="width=device-width" />
          <meta name="description" content="${''}" />
          <link rel="icon" type="image/svg+xml" href="${favicoPath}" />
          <title>${''}</title>
          <style>${sheetConfig} ${dangerouslySkipEscape(styleSheet)}</style>
      </head>
      <body><div id="${rootId}">${html}</div></body>
      </html>      
    `;

    return {
      documentHtml,
      pageContext: {
        // redirectTo: '',
      },
    };
  },
});
