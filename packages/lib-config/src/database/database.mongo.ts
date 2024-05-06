import { DATABASE_TYPE } from '@lib/backend/database/database.constants';
import { defineConfig } from '@lib/config/core/utils/defineConfig/defineConfig';
import { _database } from '@lib/config/database/_database';
import { config as configBase } from '@lib/config/database/database.base';

const { _config, config } = defineConfig({
  _config: _database,

  config: configBase,

  overrides: () => [
    {
      database: process.env.SERVER_DB_MONGO_NAME,

      host: process.env.SERVER_DB_MONGO_URL,

      password: process.env.SERVER_DB_MONGO_PASSWORD,

      type: DATABASE_TYPE.MONGO,

      username: process.env.SERVER_DB_MONGO_USERNAME,
    },
  ],
});

export { _config, config };
