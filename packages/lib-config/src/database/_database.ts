import type {
  _DatabaseConfigModel,
  DatabaseConfigModel,
} from '@lib/config/database/_database.models';
import type { ReturnTypeModel } from '@lib/shared/core/core.models';

const _databaseConfig =
  ({
    database,
    entities,
    host,
    password,
    pool,
    type,
    username,
  }: ReturnTypeModel<DatabaseConfigModel>): _DatabaseConfigModel =>
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

export default _databaseConfig;
