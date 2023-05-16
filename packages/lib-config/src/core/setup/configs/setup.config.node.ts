import { Container } from '@lib/backend/core/utils/Container/Container';
import { DATABASE_TYPE } from '@lib/backend/database/database.constants';
import { Database } from '@lib/backend/database/utils/Database/Database';
import type { _SetupConfigModel } from '@lib/config/core/setup/_setup.models';
import { default as setupConfigBase } from '@lib/config/core/setup/configs/setup.config.base';
import type { _DatabaseConfigModel } from '@lib/config/database/_database.models';
import { importDynamic } from '@lib/shared/core/utils/importDynamic/importDynamic';

const setupConfig: _SetupConfigModel = {
  onInitialize: async () => {
    await import('reflect-metadata');
    const databaseConfig = await importDynamic<_DatabaseConfigModel>(
      '@lib/config/database/configs/database.config.mongo',
    );
    const _databaseConfig = await databaseConfig();
    const _database = new Database(_databaseConfig);
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

export default setupConfig;
