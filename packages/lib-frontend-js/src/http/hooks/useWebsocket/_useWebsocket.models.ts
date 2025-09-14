import { type WEBSOCKET_STATUS } from '@lib/shared/http/http.constants';
import { type UriModel } from '@lib/shared/route/route.models';

export type _UseWebsocketParamsModel<TType = unknown> = {
  protocols?: Array<string>;
  onClose?(): void;
  onMessage?(message: TType): void;
  onOpen?(): void;
  uri(): Promise<UriModel>;
};

export type _UseWebsocketModel<TType = unknown> = {
  status: WEBSOCKET_STATUS;
  getWebSocket(): WebSocket | EventSource | null;
  send(message: string): void;
};
