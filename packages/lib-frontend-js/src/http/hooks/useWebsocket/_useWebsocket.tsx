import {
  type _UseWebsocketModel,
  type _UseWebsocketParamsModel,
} from '@lib/frontend/http/hooks/useWebsocket/_useWebsocket.models';
import { GRAPHQL } from '@lib/shared/graphql/graphql.constants';
import { WEBSOCKET, WEBSOCKET_STATUS } from '@lib/shared/http/http.constants';
import { uri } from '@lib/shared/http/utils/uri/uri';
import useWebSocket from 'react-use-websocket';

export const _useWebsocket = <TType,>({
  onClose,
  onMessage,
  onOpen,
  protocols,
  uri: uriProps,
}: _UseWebsocketParamsModel<TType>): _UseWebsocketModel<TType> => {
  const { getWebSocket, readyState, sendMessage } = useWebSocket(
    uri({
      host: process.env.SERVER_APP_WEBSOCKET_HOST,
      pathname: `api/${GRAPHQL}/${WEBSOCKET}`,
      port: process.env.SERVER_APP_WEBSOCKET_PORT,
    }),
    {
      onClose: console.warn,
      onError: (e) => {
        console.warn(e);
      },
      onMessage: (event) => {
        console.warn(event);
      },
      onOpen: console.warn,
      protocols,
      reconnectAttempts: 1,
      reconnectInterval: 1000,
      retryOnError: true,
    },
  );

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

// import {
//   type _UseWebsocketModel,
//   type _UseWebsocketParamsModel,
// } from '@lib/frontend/http/hooks/useWebsocket/_useWebsocket.models';
// import { WEBSOCKET_STATUS } from '@lib/shared/http/http.constants';
// import { uri } from '@lib/shared/http/utils/uri/uri';
// import { useSocketIO } from 'react-use-websocket';

// export const _useWebsocket = <TType,>({
//   onClose,
//   onMessage,
//   onOpen,
//   uri: uriProps,
// }: _UseWebsocketParamsModel<TType>): _UseWebsocketModel<TType> => {
//   const { getWebSocket, readyState, sendMessage } = useSocketIO(async () => uri(await uriProps()), {
//     onClose: console.warn,
//     onError: (e) => {
//       console.warn(e);
//     },
//     onMessage: (event) => {
//       console.warn(event);
//     },
//     onOpen: console.warn,
//     reconnectAttempts: 1,
//     reconnectInterval: 1000,
//     retryOnError: true,
//   });

//   const status = (() => {
//     switch (readyState as number) {
//       case 0:
//         return WEBSOCKET_STATUS.CONNECTING;
//       case 1:
//         return WEBSOCKET_STATUS.CONNECTED;
//       default:
//         return WEBSOCKET_STATUS.CLOSED;
//     }
//   })();

//   return { getWebSocket, send: sendMessage, status };
// };
