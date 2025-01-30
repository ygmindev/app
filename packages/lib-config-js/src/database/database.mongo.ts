import { DATABASE_TYPE } from '@lib/backend/database/database.constants';
import configBase from '@lib/config/database/database.base';
import {
  type _DatabaseConfigModel,
  type DatabaseConfigModel,
} from '@lib/config/database/database.models';
import { defineConfig } from '@lib/config/utils/defineConfig/defineConfig';

export const config = defineConfig<DatabaseConfigModel, _DatabaseConfigModel>({
  ...configBase,

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

export default config;
