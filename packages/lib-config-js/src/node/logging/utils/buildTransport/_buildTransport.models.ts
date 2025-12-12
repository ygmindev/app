import { type LocalContextModel } from '@lib/backend/core/utils/LocalStorage/LocalStorage.models';
import { type OnUnknown } from 'pino-abstract-transport';
import { type Transform } from 'stream';

export type _BuildTransportParamsModel<TParams extends Record<string, unknown>> = {
  handler(params?: TParams): (
    context?: LocalContextModel & {
      hostname?: string;
      level?: number;
      msg?: string;
      pid?: number;
      time?: number;
    },
  ) => Promise<void>;
};

export type _BuildTransportModel<TParams extends Record<string, unknown>> = (
  params?: TParams,
) => Promise<Transform & OnUnknown>;
