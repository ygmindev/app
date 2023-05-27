import type {
  _DatabaseConfigModel,
  DatabaseConfigModel,
} from '@lib/config/database/database.models';
import type { ReturnTypeModel } from '@lib/shared/core/core.models';

export const _database = ({
  database,
  entities,
  host,
  password,
  pool,
  type,
  username,
}: ReturnTypeModel<DatabaseConfigModel>): ReturnTypeModel<_DatabaseConfigModel> => {
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
};
