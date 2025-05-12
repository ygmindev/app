import { type ApiConfigModel } from '@lib/config/api/api.models';

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
  run(params: { port: number | string }): Promise<void>;
};
