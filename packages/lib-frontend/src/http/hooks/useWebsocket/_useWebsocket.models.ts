import { type WebsocketStatusModel } from '#lib-shared/http/http.models';

export type _UseWebsocketParamsModel = {
  onClose?(): void;
  onOpen?(): void;
  url: string;
};

export type _UseWebsocketModel = {
  send(message: string): void;
  status: WebsocketStatusModel;
};
