import type { _DatabaseConfigParamsModel } from '@lib/config/database/_database.models';
import type { Options } from '@mikro-orm/core/utils';
import type { MongoDriver } from '@mikro-orm/mongodb';

export const _databaseConfig = ({
  database,
  entities,
  host,
  password,
  pool,
  type,
  username,
}: _DatabaseConfigParamsModel): Options<MongoDriver> => ({
  clientUrl: host,
  dbName: database,
  ensureIndexes: true,
  entities,
  password: password || undefined,
  pool: { max: pool.max, min: 0 },
  type: type,
  user: username || undefined,
});
