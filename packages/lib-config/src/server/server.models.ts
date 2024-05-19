import { type ApiConfigModel } from '@lib/config/api/api.models';
import { type _DatabaseConfigModel } from '@lib/config/database/database.models';
import { type UriParamsModel } from '@lib/shared/http/utils/uri/uri.models';

export type ServerConfigModel = Pick<UriParamsModel, 'host' | 'port'> & {
  api: ApiConfigModel;

  certificate: {
    caFile: string;

    certificateDir: string;

    privateKeyFile: string;

    publicKeyFile: string;
  };

  databaseConfig(): _DatabaseConfigModel;

  entryFile: string;

  port: number;
};
