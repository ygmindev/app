import { type _TransportModel } from '@lib/config/node/logging/utils/Transport/_Transport.models';
import { type TransportContextModel } from '@lib/config/node/logging/utils/Transport/Transport.model';
import { NotImplementedError } from '@lib/shared/core/errors/NotImplementedError/NotImplementedError';
import { Bootstrappable } from '@lib/shared/core/utils/Bootstrappable/Bootstrappable';
import { type LogDescriptor } from 'pino';
import { type OnUnknown } from 'pino-abstract-transport';
import build from 'pino-abstract-transport';
import { type Transform } from 'stream';

export class _Transport<TParams extends Record<string, unknown>>
  extends Bootstrappable
  implements _TransportModel<TParams>
{
  constructor() {
    super();
    this.handler = this.handler.bind(this);
  }

  handle(params?: TParams): (context: TransportContextModel) => Promise<void> {
    throw new NotImplementedError('handle');
  }

  async handler(params?: TParams): Promise<Transform & OnUnknown> {
    const h = this.handle(params);
    return build(async function (source) {
      for await (const obj of source) {
        void h(obj as LogDescriptor);
      }
    });
  }
}
