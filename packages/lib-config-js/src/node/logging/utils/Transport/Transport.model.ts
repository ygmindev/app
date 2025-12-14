import { type LocalContextModel } from '@lib/backend/core/utils/LocalStorage/LocalStorage.models';
import { type _TransportModel } from '@lib/config/node/logging/utils/Transport/_Transport.models';

export type TransportModel<TParams extends Record<string, unknown>> = _TransportModel<TParams>;

export type TransportContextModel = LocalContextModel & {
  hostname?: string;
  level?: number;
  msg?: string;
  pid?: number;
  time?: number;
};
