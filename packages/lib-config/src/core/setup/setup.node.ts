import { Container } from '#lib-backend/core/utils/Container/Container';
import { DATABASE_TYPE } from '#lib-backend/database/database.constants';
import { Database } from '#lib-backend/database/utils/Database/Database';
import { config as configBase } from '#lib-config/core/setup/setup.base';
import { type SetupConfigModel } from '#lib-config/core/setup/setup.models';
import { _config } from '#lib-config/database/database.mongo';

const isInitialized = false;

const isTerminated = false;

export const config: SetupConfigModel = {
  onInitialize: async () => {
    if (!isInitialized) {
      const database = new Database(_config());
      await database.connect();
      Container.set(Database, database, DATABASE_TYPE.MONGO);
      await configBase.onInitialize();
    }
  },

  onShutdown: async () => {
    if (!isTerminated) {
      const database = Container.get(Database, DATABASE_TYPE.MONGO);
      await database.close();
      await configBase.onInitialize();
    }
  },
};
