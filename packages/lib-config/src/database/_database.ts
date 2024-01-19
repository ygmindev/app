import {
  type _DatabaseConfigModel,
  type DatabaseConfigModel,
} from '@lib/config/database/database.models';

export const _database = ({
  database,
  entities,
  host,
  password,
  pool,
  type,
  username,
}: DatabaseConfigModel): _DatabaseConfigModel => {
  const config: _DatabaseConfigModel = {
    clientUrl: host,
    dbName: database,
    debug: process.env.NODE_ENV === 'development',
    ensureIndexes: true,
    entities,
    pool: { max: pool.max, min: 0 },
    type,
  };
  if (username && password) {
    config.user = username;
    config.password = password;
  }
  return config;
};
