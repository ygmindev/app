import type { _SocketModel } from '@lib/frontend/socket/utils/Socket/_Socket.models';

export class _Socket implements _SocketModel {
  protected _client?: WebSocket;

  constructor(uri: string) {
    this._client = new WebSocket(uri);
    this._client.onopen = console.warn;
    this._client.onmessage = console.warn;
  }

  on<TType>(name: string, handler: (event: TType) => void): void {
    // this._client && this._client.on(name, handler);
  }
}
