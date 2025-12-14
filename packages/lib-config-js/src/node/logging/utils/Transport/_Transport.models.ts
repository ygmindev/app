import { type TransportContextModel } from '@lib/config/node/logging/utils/Transport/Transport.model';
import { type BootstrappableModel } from '@lib/shared/core/utils/Bootstrappable/Bootstrappable.models';
import { type OnUnknown } from 'pino-abstract-transport';
import { type Transform } from 'stream';

export type _TransportModel<TParams extends Record<string, unknown>> = BootstrappableModel & {
  handle(params?: TParams): (context: TransportContextModel) => Promise<void>;

  handler(params?: TParams): Promise<Transform & OnUnknown>;
};
