import {
  type HTTP_METHOD,
  type HTTP_PROTOCOL,
  type HTTP_RESPONSE_TYPE,
  type SAME_SITE,
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
  headers?: Headers;
  status?: number;
  type?: HttpResponseTypeModel;
};

export type CookieOptionsModel = {
  domain?: string;
  expires?: Date;
  isHttpOnly?: boolean;
  isSecure?: boolean;
  maxAge?: number;
  path?: string;
  sameSite?: SameSiteModel;
};

export type SameSiteModel = `${SAME_SITE}`;
