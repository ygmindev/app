import 'reflect-metadata';

import { DATABASE_TYPE } from '@lib/backend/database/database.constants';
import { Database } from '@lib/backend/database/utils/Database/Database';
import type { _SetupConfigModel } from '@lib/config/core/setup/_setup.models';
import { setupConfig as setupConfigBase } from '@lib/config/core/setup/configs/setup.config.base';
import { Container } from '@lib/shared/core/utils/Container/Container';

export const setupConfig: _SetupConfigModel = {
  onInitialize: async () => {
    const { databaseConfigMongo } = await import(
      '@lib/config/database/configs/database.config.mongo'
    );
    const _databaseConfigMongo = await databaseConfigMongo();
    const _database = new Database(_databaseConfigMongo);
    await _database.connect();
    Container.set(Database, _database, DATABASE_TYPE.MONGO);
    await setupConfigBase.onInitialize();
  },

  onTerminate: async () => {
    const _database = Container.get(Database, DATABASE_TYPE.MONGO);
    await _database.close();
    await setupConfigBase.onTerminate();
  },
};
