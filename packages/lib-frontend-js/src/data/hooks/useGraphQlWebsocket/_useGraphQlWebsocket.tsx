import {
  type _UseGraphQlWebsocketModel,
  type _UseGraphQlWebsocketParamsModel,
} from '@lib/frontend/data/hooks/useGraphQlWebsocket/_useGraphQlWebsocket.models';
import { uri } from '@lib/shared/http/utils/uri/uri';
import { createClient } from 'graphql-ws';

export const _useGraphQlWebsocket = ({
  connectionParams,
  isCredentials,
  onClose,
  onMessage,
  onOpen,
  protocols,
  uri: uriParams,
}: _UseGraphQlWebsocketParamsModel): _UseGraphQlWebsocketModel => {
  const client = createClient({
    connectionParams,
    on: {
      closed: console.warn,
      message: console.warn,
      opened: console.warn,
    },
    url: async () => uri(await uriParams()),
  });

  return {
    close: async () => client.dispose(),
  };
};
