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
    debug: false,
    driverOptions: {},
    ensureIndexes: true,
    entities,
    name: type,
    pool: { max: pool.max, min: pool.min },
  };
  if (username && password) {
    config.user = username;
    config.password = password;
  }
  return config;
};
