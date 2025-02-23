import { type UseWebsocketParamsModel } from '@lib/frontend/http/hooks/useWebsocket/useWebsocket.models';

export type _UseGraphQlWebsocketParamsModel = UseWebsocketParamsModel & {
  connectionParams?(): Promise<Record<string, unknown>>;
};

export type _UseGraphQlWebsocketModel = {
  close(): Promise<void>;
};
