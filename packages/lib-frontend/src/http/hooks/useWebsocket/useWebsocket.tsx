import { useCredentials } from '#lib-frontend/auth/hooks/useCredentials/useCredentials';
import { _useWebsocket } from '#lib-frontend/http/hooks/useWebsocket/_useWebsocket';
import {
  type UseWebsocketModel,
  type UseWebsocketParamsModel,
} from '#lib-frontend/http/hooks/useWebsocket/useWebsocket.models';
import { uri } from '#lib-shared/http/utils/uri/uri';

export const useWebsocket = ({
  isCredentials = true,
  ...params
}: UseWebsocketParamsModel = {}): UseWebsocketModel => {
  const credentials = useCredentials();
  return _useWebsocket({
    ...params,
    url: uri({
      host: process.env.SERVER_WEBSOCKET_HOST,
      params: isCredentials
        ? credentials.Authorization && { Authorization: credentials.Authorization }
        : undefined,
      pathname: '/ws',
    }),
  });
};
