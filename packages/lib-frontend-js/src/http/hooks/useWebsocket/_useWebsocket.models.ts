import { type WebsocketStatusModel } from '@lib/shared/http/http.models';
import { type UriModel } from '@lib/shared/route/route.models';

export type _UseWebsocketParamsModel<TType = unknown> = {
  onClose?(): void;
  onMessage?(message: TType): void;
  onOpen?(): void;
  protocols?: Array<string>;
  uri(): Promise<UriModel>;
};

export type _UseWebsocketModel<TType = unknown> = {
  getWebSocket(): WebSocket | EventSource | null;
  send(message: string): void;
  status: WebsocketStatusModel;
};
