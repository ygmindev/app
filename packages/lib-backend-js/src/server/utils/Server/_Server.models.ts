import { type ApiConfigModel, type ApiEndpointModel } from '@lib/config/api/api.models';
import { type FastifyInstance } from 'fastify';

export type _ServerParamsModel = {
  api: ApiConfigModel;

  certificate: {
    caFilename: string;

    certificateDir: string;

    privateKeyFilename: string;

    publicKeyFilename: string;
  };

  cors: {
    allowedHeaders: Array<string>;

    allowedOrigins: Array<string>;
  };

  host: string;

  port: number;
};

export type _ServerModel = {
  _app: FastifyInstance;

  register<TType, TParams>(endpoint: ApiEndpointModel<TType, TParams>): Promise<void>;

  run(): Promise<void>;
};
