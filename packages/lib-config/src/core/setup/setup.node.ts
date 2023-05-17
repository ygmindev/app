import { Container } from '@lib/backend/core/utils/Container/Container';
import { DATABASE_TYPE } from '@lib/backend/database/database.constants';
import { Database } from '@lib/backend/database/utils/Database/Database';
import type { SetupConfigModel } from '@lib/config/core/setup/_setup.models';
import { default as setupConfigBase } from '@lib/config/core/setup/setup.base';
import { _databaseConfigMongo } from '@lib/config/database/_database.mongo';

const setupConfig: SetupConfigModel = {
  onInitialize: async () => {
    await import('reflect-metadata');
    const _database = new Database(_databaseConfigMongo);
    await _database.connect();
    Container.set(Database, _database, DATABASE_TYPE.MONGO);
    await setupConfigBase.onInitialize();
  },

  onTerminate: async () => {
    const _database = Container.get(Database, DATABASE_TYPE.MONGO);
    await _database.close();
    await setupConfigBase.onInitialize();
  },
};

export default setupConfig;
