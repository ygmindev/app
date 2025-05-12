import { uri } from '@lib/shared/http/utils/uri/uri';

export const PING = 'ping';

export const WEBSOCKET = 'websocket';

export const SSE = 'sse';

export enum HTTP_METHOD {
  DELETE = 'DELETE',
  GET = 'GET',
  OPTIONS = 'OPTIONS',
  POST = 'POST',
  PUT = 'PUT',
  UPDATE = 'UPDATE',
}

export enum HTTP_PROTOCOL {
  HTTP = 'HTTP',
  WEBSOCKET = 'WEBSOCKET',
}

export enum HTTP_RESPONSE_TYPE {
  ARRAYBUFFER = 'arraybuffer',
  BLOB = 'blob',
  JSON = 'json',
  STREAM = 'stream',
}

export const HTTP_STATUS_CODE = {
  BAD_REQUEST: 400,
  CONFLICT: 409,
  FORBIDDEN: 403,
  GATEWAY_TIMEOUT: 504,
  INTERNAL_SERVER_ERROR: 500,
  INVALID_TOKEN: 498,
  NETWORK_CONNECT_TIMEOUT: 599,
  OK: 200,
  REDIRECT: 302,
  SERVICE_UNAVAILABLE: 503,
  UNAUTHORIZED: 401,
};

export enum WEBSOCKET_METHOD {
  CONNECT = 'connect',
  DEFAULT = 'default',
  DISCONNECT = 'disconnect',
}

export enum WEBSOCKET_STATUS {
  CLOSED = 'closed',
  CONNECTED = 'connected',
  CONNECTING = 'connecting',
}

export const APP_URI = uri({ host: process.env.APP_HOST, port: process.env.APP_PORT });

export const SERVER_APP_URI = uri({
  host: process.env.SERVER_APP_HOST,
  port: process.env.SERVER_APP_PORT,
});

export enum SAME_SITE {
  LAX = 'Lax',
  STRICT = 'Strict',
}
