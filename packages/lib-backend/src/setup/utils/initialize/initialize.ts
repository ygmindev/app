import { Container } from '@lib/backend/core/utils/Container/Container';
import { DATABASE_TYPE } from '@lib/backend/database/database.constants';
import { Database } from '@lib/backend/database/utils/Database/Database';
import { type InitializeModel } from '@lib/backend/setup/utils/initialize/initialize.models';
import { _config as databaseConfig } from '@lib/config/database/database.mongo';

export const initialize = async (): Promise<InitializeModel> => {
  const database = new Database(databaseConfig());
  await database.connect();
  Container.set(Database, database, DATABASE_TYPE.MONGO);
  return { database };
};
