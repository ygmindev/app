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
