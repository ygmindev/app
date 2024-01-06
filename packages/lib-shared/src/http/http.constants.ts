export const PING = 'ping';

export const WEBSOCKET = 'websocket';

export enum HTTP_METHOD {
  DELETE = 'delete',
  GET = 'get',
  POST = 'post',
  PUT = 'put',
  UPDATE = 'update',
  WEBSOCKET = 'websocket',
}

export enum HTTP_RESPONSE_TYPE {
  ARRAYBUFFER = 'arraybuffer',
  BLOB = 'blob',
  JSON = 'json',
}

export const HTTP_STATUS_CODE = {
  BAD_REQUEST: 400,
  CONFLICT: 409,
  FORBIDDEN: 403,
  GATEWAY_TIMEOUT: 504,
  INTERNAL_SERVER_ERROR: 500,
  NETWORK_CONNECT_TIMEOUT: 599,
  SERVICE_UNAVAILABLE: 503,
  SUCCESS: 200,
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
