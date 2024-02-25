import { Container } from '@lib/backend/core/utils/Container/Container';
import { DATABASE_TYPE } from '@lib/backend/database/database.constants';
import { Database } from '@lib/backend/database/utils/Database/Database';
import {
  type InitializeModel,
  type InitializeParamsModel,
} from '@lib/backend/setup/utils/initialize/initialize.models';

export const initialize = async ({ config }: InitializeParamsModel): Promise<InitializeModel> => {
  const result: InitializeModel = {};
  if (config) {
    const database = new Database(config);
    await database.connect();
    Container.set(Database, database, DATABASE_TYPE.MONGO);
    result.database = database;
  }
  return result;
};
