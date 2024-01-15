import { type WebsocketStatusModel } from '@lib-shared/http/http.models';

export type _UseWebsocketParamsModel<TType = unknown> = {
  onClose?(): void;
  onMessage?(message: TType): void;
  onOpen?(): void;
  url: string;
};

export type _UseWebsocketModel<TType = unknown> = {
  getWebSocket(): WebSocket | EventSource | null;
  send(message: string): void;
  status: WebsocketStatusModel;
};