import {
  type _UseWebsocketModel,
  type _UseWebsocketParamsModel,
} from '@lib/frontend/http/hooks/useWebsocket/_useWebsocket.models';
import { WEBSOCKET_STATUS } from '@lib/shared/http/http.constants';
import { uri } from '@lib/shared/http/utils/uri/uri';
import { useSocketIO } from 'react-use-websocket';

export const _useWebsocket = <TType,>({
  onClose,
  onMessage,
  onOpen,
  uri: uriProps,
}: _UseWebsocketParamsModel<TType>): _UseWebsocketModel<TType> => {
  const { getWebSocket, readyState, sendMessage } = useSocketIO(async () => uri(await uriProps()), {
    onClose: console.warn,
    onMessage: (event) => {
      console.warn(event);
    },
    onOpen: console.warn,
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
