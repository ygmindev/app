import 'raf/polyfill.js';

import { getTokenFromHeader } from '@lib/backend/auth/utils/getTokenFromHeader/getTokenFromHeader';
import { initialize } from '@lib/backend/setup/utils/initialize/initialize';
import { type RequestContextModel } from '@lib/config/api/api.models';
import { _onBeforeServer } from '@lib/config/node/framework/onBeforeServer/_onBeforeServer';
import {
  type OnBeforeServerModel,
  type OnBeforeServerParamsModel,
} from '@lib/config/node/framework/onBeforeServer/onBeforeServer.models';
import { AUTH_STATUS } from '@lib/frontend/auth/stores/authStore/authStore.constants';
import { QueryClient } from '@lib/frontend/data/utils/QueryClient/QueryClient';
import { ROOT_REDUCERS } from '@lib/frontend/root/stores/rootStore.constants';
import { type RootStateModel } from '@lib/frontend/root/stores/rootStore.models';
import { Store } from '@lib/frontend/state/utils/Store/Store';
import { STYLE_BRIGHTNESS } from '@lib/frontend/style/style.constants';
import { AUTH } from '@lib/shared/auth/auth.constants';
import { merge } from '@lib/shared/core/utils/merge/merge';
import { logger } from '@lib/shared/logging/utils/Logger/Logger';
import { QUERY } from '@lib/shared/query/query.constants';
import { ROUTE } from '@lib/shared/route/route.constants';
import { matchRoutes } from '@lib/shared/route/utils/matchRoutes/matchRoutes';
import { STATE } from '@lib/shared/state/state.constants';
import { STYLE } from '@lib/shared/style/style.constants';
import { USER } from '@lib/shared/user/user.constants';
import reduce from 'lodash/reduce';
import { type ObjectId } from 'mongodb';
import { AppRegistry } from 'react-native-web';

export const onBeforeServer = ({
  database,
  graphql,
  routes,
}: OnBeforeServerParamsModel): OnBeforeServerModel =>
  _onBeforeServer({
    render: async (params) => {
      const { context, headers } = params;

      // 1. initialize backend
      await initialize({ database });
      params.graphql = graphql;

      // 2. hydrate state from cookies and headers
      const queryClient = new QueryClient();
      const store = new Store<RootStateModel>({
        cookies: context?.[STATE]?.cookies,
        reducers: ROOT_REDUCERS,
      });
      const initialState = await store.getStatePersisted();

      // hydrate auth state
      const token = initialState?.[AUTH]?.token;
      let userId: string | undefined;
      try {
        const signIn = token?.access && (await getTokenFromHeader(`Bearer ${token.access}`));
        signIn && (userId = (signIn._id as unknown as ObjectId).toString());
      } catch (e) {
        logger.error(e as Error);
      }
      if (userId) {
        initialState[AUTH] = { status: AUTH_STATUS.AUTHENTICATED, token };
        initialState[USER] = { currentUser: { _id: userId } };
      } else {
        initialState[AUTH] = { status: AUTH_STATUS.UNAUTHENTICATED };
      }

      // hydrate brightness
      const brightness = initialState?.[STYLE]?.brightness;
      if (!brightness && headers?.['sec-ch-prefers-color-scheme'] === 'dark') {
        initialState[STYLE] = { ...initialState[STYLE], brightness: STYLE_BRIGHTNESS.DARK };
      }

      // hydrate routing state
      const pathname = context?.[ROUTE]?.location?.pathname;
      const matchedRoutes = routes && pathname ? matchRoutes({ pathname, routes }) : [];
      const requestContext: RequestContextModel | undefined = {};

      // hydrate data
      const { loaders: loadersF } = (matchedRoutes ?? []).reduce(
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

      // hydrate context
      params.context = merge([
        { [QUERY]: { client: queryClient }, [STATE]: { initialState } },
        context,
      ]);

      // 3. hydrate page
      AppRegistry.registerComponent('App', () => params.Page);
      const { element, getStyleElement } = AppRegistry.getApplication('App', {});
      params.Page = () => element;
      params.getStyleSheet = getStyleElement;

      return params;
    },
  });
