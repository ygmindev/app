import { Container } from '#lib-backend/core/utils/Container/Container';
import { DATABASE_TYPE } from '#lib-backend/database/database.constants';
import { Database } from '#lib-backend/database/utils/Database/Database';
import { config as configBase } from '#lib-config/core/setup/setup.base';
import { type SetupConfigModel } from '#lib-config/core/setup/setup.models';
import { defineConfig } from '#lib-config/core/utils/defineConfig/defineConfig';
import { _config as _configDatabase } from '#lib-config/database/database.mongo';

let isInitialized = false;

let isTerminated = false;

const { _config, config } = defineConfig({
  config: configBase satisfies SetupConfigModel,

  overrides: [
    {
      onInitialize: async () => {
        if (!isInitialized) {
          const database = new Database(_configDatabase());
          Container.set(Database, database, DATABASE_TYPE.MONGO);
          await database.connect();
          await configBase.onInitialize();
          isInitialized = true;
        }
      },

      onShutdown: async () => {
        if (!isTerminated) {
          const database = Container.get(Database, DATABASE_TYPE.MONGO);
          await database.close();
          await configBase.onInitialize();
          isTerminated = true;
        }
      },
    },
  ],
});

export { _config, config };
