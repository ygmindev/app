import {
  type _UseWebsocketModel,
  type _UseWebsocketParamsModel,
} from '@lib/frontend/http/hooks/useWebsocket/_useWebsocket.models';
import { WEBSOCKET_STATUS } from '@lib/shared/http/http.constants';
import { uri } from '@lib/shared/http/utils/uri/uri';
import { useSocketIO } from 'react-use-websocket';
import { type QueryParams } from 'react-use-websocket/dist/lib/types';

export const _useWebsocket = <TType,>({
  host,
  onClose,
  onMessage,
  onOpen,
  params,
  pathname,
  port,
}: _UseWebsocketParamsModel<TType>): _UseWebsocketModel<TType> => {
  const { getWebSocket, readyState, sendMessage } = useSocketIO(uri({ host, pathname, port }), {
    onClose: console.warn,
    onMessage: (event) => {
      console.warn(event);
    },
    onOpen: console.warn,
    queryParams: params as QueryParams,
    reconnectAttempts: 0,
    retryOnError: false,
  });

  const status = (() => {
    switch (readyState as number) {
      case 0:
        return WEBSOCKET_STATUS.CONNECTING;
      case 1:
        return WEBSOCKET_STATUS.CONNECTED;
      default:
        return WEBSOCKET_STATUS.CLOSED;
    }
  })();

  return { getWebSocket, send: sendMessage, status };
};
