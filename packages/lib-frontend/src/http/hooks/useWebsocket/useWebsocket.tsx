import { _useWebsocket } from '#lib-frontend/http/hooks/useWebsocket/_useWebsocket';
import {
  type UseWebsocketModel,
  type UseWebsocketParamsModel,
} from '#lib-frontend/http/hooks/useWebsocket/useWebsocket.models';
import { uri } from '#lib-shared/http/utils/uri/uri';

export const useWebsocket = ({ ...params }: UseWebsocketParamsModel = {}): UseWebsocketModel =>
  _useWebsocket({
    ...params,
    url: uri({ host: process.env.SERVER_WEBSOCKET_HOST, port: process.env.SERVER_WEBSOCKET_PORT }),
  });
