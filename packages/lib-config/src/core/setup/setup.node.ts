import { config as configBase } from '#lib-config/core/setup/setup.base';
import type { SetupConfigModel } from '#lib-config/core/setup/setup.models';
import { _config } from '#lib-config/database/database.mongo';

import { Container } from '#lib-backend/core/utils/Container/Container';
import { DATABASE_TYPE } from '#lib-backend/database/database.constants';
import { Database } from '#lib-backend/database/utils/Database/Database';

const isInitialized = false;

const isTerminated = false;

export const config: SetupConfigModel = {
  onInitialize: async () => {
    if (!isInitialized) {
      if (process.env.USE_DATABASE) {
        const database = new Database(_config());
        await database.connect();
        Container.set(Database, database, DATABASE_TYPE.MONGO);
      }

      await configBase.onInitialize();
    }
  },

  onTerminate: async () => {
    if (!isTerminated) {
      if (process.env.USE_DATABASE) {
        const database = Container.get(Database, DATABASE_TYPE.MONGO);
        await database.close();
      }

      await configBase.onInitialize();
    }
  },
};
