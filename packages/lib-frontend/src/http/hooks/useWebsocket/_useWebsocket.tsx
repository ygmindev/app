import { useSocketIO } from 'react-use-websocket';

import {
  type _UseWebsocketModel,
  type _UseWebsocketParamsModel,
} from '#lib-frontend/http/hooks/useWebsocket/_useWebsocket.models';
import { WEBSOCKET_STATUS } from '#lib-shared/http/http.constants';

export const _useWebsocket = <TType,>({
  onClose,
  onMessage,
  onOpen,
  url,
}: _UseWebsocketParamsModel<TType>): _UseWebsocketModel<TType> => {
  const { getWebSocket, readyState, sendMessage } = useSocketIO(url, {
    onClose,
    onMessage: (event) => {
      console.warn(event);
    },
    onOpen: console.warn,
    reconnectAttempts: 0,
    retryOnError: false,
    shouldReconnect: () => false,
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
