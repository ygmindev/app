import type { _SocketModel } from '@lib/frontend/socket/utils/Socket/_Socket.models';
import { warn } from '@lib/shared/logging/utils/logger/logger';

export class _Socket implements _SocketModel {
  protected _client?: WebSocket;

  constructor(uri: string) {
    this._client = new WebSocket(uri);
    this._client.onopen = warn;
    this._client.onmessage = warn;
  }

  on<TType>(name: string, handler: (event: TType) => void): void {
    // this._client && this._client.on(name, handler);
  }
}
