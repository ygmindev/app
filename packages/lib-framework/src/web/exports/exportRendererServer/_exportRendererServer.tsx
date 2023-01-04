import type {
  _ExportRendererServerModel,
  _ExportRendererServerParamsModel,
} from '@lib/framework/web/exports/exportRendererServer/_exportRendererServer.models';
import { renderToString } from 'react-dom/server';
import { dangerouslySkipEscape, escapeInject } from 'vite-plugin-ssr';

export const _exportRendererServer = ({
  favicoPath,
  rootId,
}: _ExportRendererServerParamsModel): _ExportRendererServerModel => ({
  render: async ({ Page, ...ctx }) => {
    console.warn(ctx);
    const html = renderToString(<Page />);
    const documentHtml = escapeInject`
      <!DOCTYPE html>
      <html lang="${'en'}">
      <head>
          <meta charset="UTF-8" />
          <meta name="viewport" content="width=device-width" />
          <meta name="description" content="${''}" />
          <link rel="icon" type="image/svg+xml" href="${favicoPath}" />
          <title>${''}</title>
      </head>
      <body><div id="${rootId}">${dangerouslySkipEscape(html)}</div></body>
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
