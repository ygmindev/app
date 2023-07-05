// COMPLETE
import { Container } from '#lib-backend/core/utils/Container/Container';
import { DATABASE_TYPE } from '#lib-backend/database/database.constants';
import { Database } from '#lib-backend/database/utils/Database/Database';
import { _setup } from '#lib-config/core/setup/_setup';
import { config as configBase } from '#lib-config/core/setup/setup.base';
import { defineConfig } from '#lib-config/core/utils/defineConfig/defineConfig';
import { _config as _configDatabase } from '#lib-config/database/database.mongo';

const { _config, config } = defineConfig({
  _config: _setup,

  config: configBase,

  overrides: [
    {
      onInitialize: async () => {
        const database = new Database(_configDatabase());
        Container.set(Database, database, DATABASE_TYPE.MONGO);
        await database.connect();
        await configBase.onInitialize();
      },

      onTerminate: async () => {
        const database = Container.get(Database, DATABASE_TYPE.MONGO);
        await database.close();
        await configBase.onInitialize();
      },
    },
  ],
});

export { _config, config };
