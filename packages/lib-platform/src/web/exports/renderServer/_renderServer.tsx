import { QueryClient } from '@lib/frontend/data/utils/QueryClient/QueryClient';
import { type RootContextModel } from '@lib/frontend/root/root.models';
import { ROOT_REDUCERS } from '@lib/frontend/root/stores/rootStore.constants';
import {
  type RootActionsParamsModel,
  type RootStateContextModel,
  type RootStateModel,
} from '@lib/frontend/root/stores/rootStore.models';
import { Store } from '@lib/frontend/state/utils/Store/Store';
import { getLocaleStoreFromI18n } from '@lib/platform/locale/utils/getLocaleStoreFromI18n/getLocaleStoreFromI18n';
import {
  type _RenderServerModel,
  type _RenderServerParamsModel,
} from '@lib/platform/web/exports/renderServer/_renderServer.models';
import { merge } from '@lib/shared/core/utils/merge/merge';
import { pick } from '@lib/shared/core/utils/pick/pick';
import { LOCALE } from '@lib/shared/locale/locale.constants';
import { QUERY } from '@lib/shared/query/query.constants';
import { STATE } from '@lib/shared/state/state.constants';
import { renderToPipeableStream, renderToStaticMarkup } from 'react-dom/server';
import { dangerouslySkipEscape, escapeInject, stampPipe } from 'vike/server';

export const _renderServer =
  ({
    initialize,
    // publicPath,
    render,
    rootId,
    ssrContextKeys,
  }: _RenderServerParamsModel): _RenderServerModel =>
  async ({ Page, context, pageProps }) => {
    initialize && (await initialize());
    const queryClient = new QueryClient();
    const store = new Store<Array<keyof RootStateModel>, RootStateModel, RootActionsParamsModel>({
      cookies: context?.state?.cookies,
      reducers: ROOT_REDUCERS,
    });
    const contextF: RootContextModel = merge([
      {
        [QUERY]: {
          client: queryClient.client,
        },
        [STATE]: {
          initialState: await store.getStatePersisted(),
        } as RootStateContextModel,
      },
      context,
    ]);
    const { element, getStyleSheet } = render({
      context: contextF,
      element: <Page {...pageProps} />,
    });
    const styleSheet = renderToStaticMarkup(getStyleSheet());
    // const stream = await renderToStream(element);
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
          <link rel="icon" type="image/svg+xml" href="/favico/favico.svg" />
          <title>${''}</title>
          <style>${dangerouslySkipEscape(styleSheet)}</style>
        </head>
        <body><div id="${rootId}">${pipe}</div></body>
      </html>
    `;

    return {
      documentHtml,

      pageContext: async () => {
        const i18n = contextF?.locale?.i18n;
        const pageContext: RootContextModel = merge([
          {
            [LOCALE]: i18n ? { store: getLocaleStoreFromI18n({ i18n }) } : undefined,
            [QUERY]: { state: queryClient.state },
          },
          contextF,
        ]);
        return {
          context: pick(pageContext, ssrContextKeys),
          enableEagerStreaming: true,
          redirectTo: pageContext.route?.redirectTo,
        };
      },
    };
  };
