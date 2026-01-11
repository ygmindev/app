import { type ApiConfigModel, type ApiEndpointModel } from '@lib/config/api/api.models';
import { type BootstrappableModel } from '@lib/shared/core/utils/Bootstrappable/Bootstrappable.models';
import { type FastifyInstance } from 'fastify';

export type _ServerParamsModel = {
  api?: ApiConfigModel;

  certificate?: {
    caFilename: string;

    certificateDir: string;

    privateKeyFilename: string;

    publicKeyFilename: string;
  };

  host: string;

  port?: number;
};

export type _ServerModel = BootstrappableModel & {
  _app: FastifyInstance;

  register<TType, TParams>(endpoint: ApiEndpointModel<TType, TParams>): Promise<void>;

  run(): Promise<void>;
};
