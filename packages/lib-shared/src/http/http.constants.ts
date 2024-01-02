export const PING = 'ping';

export const WEBSOCKET = 'websocket';

export enum HTTP_METHOD {
  DELETE = 'delete',
  GET = 'get',
  POST = 'post',
  UPDATe = 'update',
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
