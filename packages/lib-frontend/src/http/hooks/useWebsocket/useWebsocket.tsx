import { useCredentials } from '@lib/frontend/auth/hooks/useCredentials/useCredentials';
import { useUnmount } from '@lib/frontend/core/hooks/useUnmount/useUnmount';
import { _useWebsocket } from '@lib/frontend/http/hooks/useWebsocket/_useWebsocket';
import {
  type UseWebsocketModel,
  type UseWebsocketParamsModel,
} from '@lib/frontend/http/hooks/useWebsocket/useWebsocket.models';
import { WEBSOCKET_STATUS } from '@lib/shared/http/http.constants';

export const useWebsocket = <TType = unknown,>({
  host = process.env.SERVER_APP_WEBSOCKET_HOST,
  isCredentials = true,
  pathname = '/ws',
  port = process.env.SERVER_APP_WEBSOCKET_PORT,
  ...params
}: UseWebsocketParamsModel<TType> = {}): UseWebsocketModel<TType> => {
  const credentials = useCredentials();

  const result = _useWebsocket<TType>({
    ...params,
    host,
    params:
      isCredentials && credentials.Authorization
        ? { Authorization: credentials.Authorization }
        : undefined,
    pathname,
    port,
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
