import 'setimmediate';
import 'source-map-support';
import 'raf/polyfill.js';

import { getTokenFromHeader } from '@lib/backend/auth/utils/getTokenFromHeader/getTokenFromHeader';
import { initialize as initializeBackend } from '@lib/backend/setup/utils/initialize/initialize';
import { type RequestContextModel } from '@lib/config/api/api.models';
import { config as databaseConfig } from '@lib/config/database/database.mongo';
import { type FrameworkRenderParamsModel } from '@lib/config/node/framework/framework.models';
import { AUTH_STATUS } from '@lib/frontend/auth/stores/authStore/authStore.constants';
import { type FCModel } from '@lib/frontend/core/core.models';
import { QueryClient } from '@lib/frontend/data/utils/QueryClient/QueryClient';
import { ROOT_REDUCERS } from '@lib/frontend/root/stores/rootStore.constants';
import {
  type RootActionsParamsModel,
  type RootStateContextModel,
  type RootStateModel,
} from '@lib/frontend/root/stores/rootStore.models';
import { Store } from '@lib/frontend/state/utils/Store/Store';
import { AUTH } from '@lib/shared/auth/auth.constants';
import { merge } from '@lib/shared/core/utils/merge/merge';
import { QUERY } from '@lib/shared/query/query.constants';
import { ROUTE } from '@lib/shared/route/route.constants';
import { matchRoutes } from '@lib/shared/route/utils/matchRoutes/matchRoutes';
import { STATE } from '@lib/shared/state/state.constants';
import { USER } from '@lib/shared/user/user.constants';
import reduce from 'lodash/reduce';
import { type ObjectId } from 'mongodb';
import { type ReactElement } from 'react';
import { AppRegistry } from 'react-native-web';

export type AppRegistryModel = {
  getApplication: (
    name: string,
    props: unknown,
  ) => { element: ReactElement; getStyleElement: () => ReactElement };
  registerComponent(name: string, component: () => FCModel | undefined): void;
};

export const onBeforeServer = async (
  params: FrameworkRenderParamsModel,
): Promise<FrameworkRenderParamsModel> => {
  const { context, routes } = params;

  await initializeBackend({ database: databaseConfig.params() });
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

  const pathname = context?.[ROUTE]?.location?.pathname;
  const matchedRoutes = routes && pathname ? matchRoutes({ pathname, routes }) : [];
  const { loaders: loadersF } = (matchedRoutes ?? []).reduce(
    (result, { isProtectable, loaders }) => ({
      isProtectable: result.isProtectable || isProtectable || false,
      loaders: loaders
        ? [
            ...result.loaders,
            ...reduce(
              loaders({ pathname }),
              (r, v, k) => (v ? [...r, queryClient.prefetch(k, async () => v(requestContext))] : r),
              [] as Array<Promise<unknown>>,
            ),
          ]
        : result.loaders,
    }),
    { isProtectable: false, loaders: [] as Array<Promise<unknown>> },
  );
  loadersF && (await Promise.all(loadersF));

  params.context = merge([
    {
      [QUERY]: { client: queryClient },
      [STATE]: { initialState } as RootStateContextModel,
    },
    context,
  ]);

  (AppRegistry as AppRegistryModel).registerComponent('App', () => params.Page);
  const { element, getStyleElement } = (AppRegistry as AppRegistryModel).getApplication('App', {});
  params.Page = () => element;
  params.getStyleSheet = getStyleElement;
  return params;
};
