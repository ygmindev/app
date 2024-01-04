import useWebSocket from 'react-use-websocket';

import { useAsync } from '#lib-frontend/core/hooks/useAsync/useAsync';
import {
  type _UseWebsocketModel,
  type _UseWebsocketParamsModel,
} from '#lib-frontend/http/hooks/useWebsocket/_useWebsocket.models';
import { sleep } from '#lib-shared/core/utils/sleep/sleep';
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

  useAsync(async (isActive) => {
    await sleep(5000);
    isActive() && sendMessage('test');
  }, []);

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
