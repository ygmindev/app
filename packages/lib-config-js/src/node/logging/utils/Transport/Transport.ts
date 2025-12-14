import { _Transport } from '@lib/config/node/logging/utils/Transport/_Transport';

export class Transport<TParams extends Record<string, unknown>> extends _Transport<TParams> {}
