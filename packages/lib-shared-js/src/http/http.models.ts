import {
  type HTTP_METHOD,
  type HTTP_PROTOCOL,
  type HTTP_RESPONSE_TYPE,
  type WEBSOCKET_METHOD,
  type WEBSOCKET_STATUS,
} from '@lib/shared/http/http.constants';

export type HttpMethodModel = `${HTTP_METHOD}`;

export type HttpProtocolModel = `${HTTP_PROTOCOL}`;

export type HttpResponseTypeModel = `${HTTP_RESPONSE_TYPE}`;

export type WebsocketMethodModel = `${WEBSOCKET_METHOD}`;

export type WebsocketStatusModel = `${WEBSOCKET_STATUS}`;

export type HttpRequestModel<TParams = void> = {
  body?: TParams;
};

export type HttpResponseModel<TType = void> = {
  body?: TType;
  status?: number;
  type?: HttpResponseTypeModel;
};
