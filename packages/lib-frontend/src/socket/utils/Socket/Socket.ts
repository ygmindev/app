import { _Socket } from '@lib/frontend/socket/utils/Socket/_Socket';
import type { SocketModel } from '@lib/frontend/socket/utils/Socket/Socket.models';

export class Socket extends _Socket implements SocketModel {
  constructor(uri: string) {
    super(uri.replaceAll('http', 'ws'));
  }
}
