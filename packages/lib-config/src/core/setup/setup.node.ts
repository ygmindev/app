import { Container } from '@lib/backend/core/utils/Container/Container';
import { DATABASE_TYPE } from '@lib/backend/database/database.constants';
import { Database } from '@lib/backend/database/utils/Database/Database';
import { config as configBase } from '@lib/config/core/setup/setup.base';
import type { SetupConfigModel } from '@lib/config/core/setup/setup.models';
import { _config } from '@lib/config/database/database.mongo';

const _isInitialized = false;

const _isTerminated = false;

export const config: SetupConfigModel = {
  onInitialize: async () => {
    if (!_isInitialized) {
      await import('reflect-metadata');
      const _database = new Database(_config());
      await _database.connect();
      Container.set(Database, _database, DATABASE_TYPE.MONGO);
      await configBase.onInitialize();
    }
  },

  onTerminate: async () => {
    if (!_isTerminated) {
      const _database = Container.get(Database, DATABASE_TYPE.MONGO);
      await _database.close();
      await configBase.onInitialize();
    }
  },
};
