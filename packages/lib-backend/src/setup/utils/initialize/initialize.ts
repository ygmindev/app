import { Container } from '@lib/backend/core/utils/Container/Container';
import { DATABASE_TYPE } from '@lib/backend/database/database.constants';
import {
  type InitializeModel,
  type InitializeParamsModel,
} from '@lib/backend/setup/utils/initialize/initialize.models';

export const initialize = async ({
  databaseConfig,
}: InitializeParamsModel): Promise<InitializeModel> => {
  const result: InitializeModel = {};
  if (databaseConfig) {
    const { Database } = await import('@lib/backend/database/utils/Database/Database');

    const database = new Database(databaseConfig);
    await database.connect();
    Container.set(Database, database, DATABASE_TYPE.MONGO);
    result.database = database;
  }
  return result;
};
