import { useCredentials } from '@lib/frontend/auth/hooks/useCredentials/useCredentials';
import { useUnmount } from '@lib/frontend/core/hooks/useUnmount/useUnmount';
import { _useGraphQlWebsocket } from '@lib/frontend/data/hooks/useGraphQlWebsocket/_useGraphQlWebsocket';
import {
  type UseGraphQlWebsocketModel,
  type UseGraphQlWebsocketParamsModel,
} from '@lib/frontend/data/hooks/useGraphQlWebsocket/useGraphQlWebsocket.models';

export const useGraphQlWebsocket = ({
  isCredentials = true,
  uri: uriParams,
  ...props
}: UseGraphQlWebsocketParamsModel): UseGraphQlWebsocketModel => {
  const { getCredentials } = useCredentials();
  const subscription = _useGraphQlWebsocket({
    ...props,

    connectionParams: async () =>
      isCredentials ? { Authorization: (await getCredentials()).Authorization } : {},

    uri: async () => {
      const { host, params, pathname, port } = await uriParams();
      return {
        host: host ?? process.env.SERVER_APP_WEBSOCKET_HOST,
        params,
        pathname: pathname ?? '/ws',
        port: port ?? process.env.SERVER_APP_WEBSOCKET_PORT,
      };
    },
  });

  useUnmount(() => {
    void subscription.close();
  });

  return subscription;
};
