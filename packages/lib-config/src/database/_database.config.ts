import type { _DatabaseConfigParamsModel } from '@lib/config/database/_database.models';
import type { Options } from '@mikro-orm/core/utils';
import type { MongoDriver } from '@mikro-orm/mongodb';
import { TsMorphMetadataProvider } from '@mikro-orm/reflection';

export const _databaseConfig = ({
  database,
  entities,
  host,
  password,
  pool,
  type,
  username,
}: _DatabaseConfigParamsModel): Options<MongoDriver> => {
  const _config: Options<MongoDriver> = {
    clientUrl: host,
    dbName: database,
    debug: false,
    ensureIndexes: true,
    entities,
    metadataProvider: TsMorphMetadataProvider,
    pool: { max: pool.max, min: 0 },
    type,
  };
  if (username && password) {
    _config.user = username;
    _config.password = password;
  }
  return _config;
};
