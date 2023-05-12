import type {
  _DatabaseConfigModel,
  _DatabaseConfigParamsModel,
} from '@lib/config/database/_database.models';
import type { ReturnTypeModel } from '@lib/shared/core/core.models';

export const _databaseConfig =
  ({
    database,
    entities,
    host,
    password,
    pool,
    type,
    username,
  }: _DatabaseConfigParamsModel): _DatabaseConfigModel =>
  async () => {
    {
      const _config: ReturnTypeModel<_DatabaseConfigModel> = {
        clientUrl: host,
        dbName: database,
        debug: false,
        ensureIndexes: true,
        entities,
        pool: { max: pool.max, min: 0 },
        type,
      };
      if (username && password) {
        _config.user = username;
        _config.password = password;
      }
      return _config;
    }
  };