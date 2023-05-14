import { Container } from '@lib/backend/core/utils/Container/Container';
import { DATABASE_TYPE } from '@lib/backend/database/database.constants';
import { Database } from '@lib/backend/database/utils/Database/Database';
import type { _SetupConfigModel } from '@lib/config/core/setup/_setup.models';
import { setupConfig as setupConfigBase } from '@lib/config/core/setup/configs/setup.config.base';

export const setupConfig: _SetupConfigModel = {
  onInitialize: async () => {
    await import('reflect-metadata');
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
