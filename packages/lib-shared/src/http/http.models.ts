import {
  type HTTP_METHOD,
  type WEBSOCKET_METHOD,
  type WEBSOCKET_STATUS,
} from '#lib-shared/http/http.constants';

export type HttpMethodModel = `${HTTP_METHOD}`;

export type WebsocketMethodModel = `${WEBSOCKET_METHOD}`;

export type WebsocketStatusModel = `${WEBSOCKET_STATUS}`;
