import useWebSocket from 'react-use-websocket';

import {
  type _UseWebsocketModel,
  type _UseWebsocketParamsModel,
} from '#lib-frontend/http/hooks/useWebsocket/_useWebsocket.models';
import { WEBSOCKET_STATUS } from '#lib-shared/http/http.constants';

export const _useWebsocket = ({
  onClose,
  onOpen,
  url,
}: _UseWebsocketParamsModel): _UseWebsocketModel => {
  const { lastMessage, readyState, sendMessage } = useWebSocket(url, {
    onClose,
    onMessage: (event) => {
      console.warn(event);
    },
    onOpen: console.warn,
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
  return { send: sendMessage, status };
};
