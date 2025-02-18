import { useCredentials } from '@lib/frontend/auth/hooks/useCredentials/useCredentials';
import { useUnmount } from '@lib/frontend/core/hooks/useUnmount/useUnmount';
import { _useWebsocket } from '@lib/frontend/http/hooks/useWebsocket/_useWebsocket';
import {
  type UseWebsocketModel,
  type UseWebsocketParamsModel,
} from '@lib/frontend/http/hooks/useWebsocket/useWebsocket.models';
import { WEBSOCKET_STATUS } from '@lib/shared/http/http.constants';

export const useWebsocket = <TType = unknown,>({
  isCredentials = true,
  uri: uriParams,
  ...params
}: UseWebsocketParamsModel<TType>): UseWebsocketModel<TType> => {
  const { getCredentials } = useCredentials();

  const result = _useWebsocket<TType>({
    ...params,
    uri: async () => {
      const { host, params, pathname, port } = await uriParams();
      const paramsF = isCredentials
        ? { Authorization: (await getCredentials()).Authorization }
        : {};
      return {
        host: host ?? process.env.SERVER_APP_WEBSOCKET_HOST,
        params: { ...paramsF, ...params },
        pathname: pathname ?? '/ws',
        port: port ?? process.env.SERVER_APP_WEBSOCKET_PORT,
      };
    },
  });

  useUnmount(() => {
    const ws = result.getWebSocket();
    if (ws) {
      result.status === WEBSOCKET_STATUS.CONNECTED
        ? ws.close()
        : ws.addEventListener('open', () => ws.close());
    }
  });

  return result;
};
