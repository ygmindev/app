import { install } from 'source-map-support';

import { Container } from '#lib-backend/core/utils/Container/Container';
import { DATABASE_TYPE } from '#lib-backend/database/database.constants';
import { Database } from '#lib-backend/database/utils/Database/Database';
import { type InitializeModel } from '#lib-backend/setup/utils/initialize/initialize.models';
import { _config as _configDatabase } from '#lib-config/database/database.mongo';
import { type CallableModel } from '#lib-shared/core/core.models';

process.env.NODE_ENV !== 'production' && (install as CallableModel)();

let isInitialized: boolean;

export const initialize = async (): Promise<InitializeModel> => {
  if (isInitialized) {
    const database = Container.get(Database, DATABASE_TYPE.MONGO);
    isInitialized = true;
    return { database };
  }
  const database = new Database(_configDatabase());
  await database.connect();
  Container.set(Database, database, DATABASE_TYPE.MONGO);
  return { database };
};
