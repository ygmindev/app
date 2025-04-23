import { getTokenFromHeader } from '@lib/backend/auth/utils/getTokenFromHeader/getTokenFromHeader';
import { getLocaleStoreFromI18n } from '@lib/backend/locale/utils/getLocaleStoreFromI18n/getLocaleStoreFromI18n';
import { type RequestContextModel } from '@lib/config/api/api.models';
import { AUTH_STATUS } from '@lib/frontend/auth/stores/authStore/authStore.constants';
import { QueryClient } from '@lib/frontend/data/utils/QueryClient/QueryClient';
import { type RootContextModel } from '@lib/frontend/root/root.models';
import { ROOT_REDUCERS } from '@lib/frontend/root/stores/rootStore.constants';
import {
  type RootActionsParamsModel,
  type RootStateContextModel,
  type RootStateModel,
} from '@lib/frontend/root/stores/rootStore.models';
import { Store } from '@lib/frontend/state/utils/Store/Store';
import { AUTH } from '@lib/shared/auth/auth.constants';
import { merge } from '@lib/shared/core/utils/merge/merge';
import { pick } from '@lib/shared/core/utils/pick/pick';
import { LOCALE } from '@lib/shared/locale/locale.constants';
import { QUERY } from '@lib/shared/query/query.constants';
import { ROUTE } from '@lib/shared/route/route.constants';
import { matchRoutes } from '@lib/shared/route/utils/matchRoutes/matchRoutes';
import { STATE } from '@lib/shared/state/state.constants';
import { USER } from '@lib/shared/user/user.constants';
import {
  type _RenderServerModel,
  type _RenderServerParamsModel,
} from '@lib/shared/web/utils/renderServer/_renderServer.models';
import reduce from 'lodash/reduce';
import { type ObjectId } from 'mongodb';
import { type ComponentType } from 'react';
import { renderToPipeableStream, renderToStaticMarkup } from 'react-dom/server';
import { dangerouslySkipEscape, escapeInject, stampPipe } from 'vike/server';

export const _renderServer =
  ({
    initialize,
    render,
    rootId,
    routes,
    ssrContextKeys,
  }: _RenderServerParamsModel): _RenderServerModel =>
  async ({ Page, context, pageProps }) => {
    await initialize?.();
    const queryClient = new QueryClient();

    const store = new Store<Array<keyof RootStateModel>, RootStateModel, RootActionsParamsModel>({
      cookies: context?.[STATE]?.cookies,
      reducers: ROOT_REDUCERS,
    });
    const initialState = await store.getStatePersisted();
    const token = initialState?.[AUTH]?.token;
    const requestContext: RequestContextModel | undefined = {};

    let userId: string | undefined;
    try {
      const signIn = token?.access && (await getTokenFromHeader(`Bearer ${token.access}`));
      signIn && (userId = (signIn._id as unknown as ObjectId).toString());
    } catch (e) {
      console.error(e);
    }

    if (userId) {
      initialState[AUTH] = { status: AUTH_STATUS.AUTHENTICATED, token };
      initialState[USER] = { currentUser: { _id: userId } };
    } else {
      initialState[AUTH] = { status: AUTH_STATUS.UNAUTHENTICATED };
    }

    // Routing
    const pathname = context?.[ROUTE]?.location?.pathname;
    const matchedRoutes = routes && pathname ? matchRoutes({ pathname, routes }) : [];
    const { loaders: loadersF } = matchedRoutes?.reduce(
      (result, { isProtectable, loaders }) => ({
        isProtectable: result.isProtectable || isProtectable || false,
        loaders: loaders
          ? [
              ...result.loaders,
              ...reduce(
                loaders({ pathname }),
                (r, v, k) =>
                  v ? [...r, queryClient.prefetch(k, async () => v(requestContext))] : r,
                [] as Array<Promise<unknown>>,
              ),
            ]
          : result.loaders,
      }),
      { isProtectable: false, loaders: [] as Array<Promise<unknown>> },
    );

    loadersF && (await Promise.all(loadersF));

    const contextF: RootContextModel = merge([
      {
        [QUERY]: { client: queryClient },
        [STATE]: { initialState } as RootStateContextModel,
      },
      context,
    ]);

    const PageF = Page as ComponentType;
    const { element, getStyleSheet } = render({
      context: contextF,
      element: <PageF {...pageProps} />,
    });
    const styleSheet = renderToStaticMarkup(getStyleSheet());
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
        const i18n = contextF?.[LOCALE]?.i18n;
        const pageContext: RootContextModel = merge([
          {
            [LOCALE]: i18n ? { store: getLocaleStoreFromI18n({ i18n }) } : undefined,
            [QUERY]: { state: queryClient.state },
          },
          contextF,
        ]);
        await queryClient.clear();
        return {
          context: pick(pageContext, ssrContextKeys),
          enableEagerStreaming: true,
          redirectTo: pageContext[ROUTE]?.redirectTo,
        };
      },
    };
  };
