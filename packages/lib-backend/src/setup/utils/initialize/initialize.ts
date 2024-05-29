import { Container } from '@lib/backend/core/utils/Container/Container';
import { DATABASE_TYPE } from '@lib/backend/database/database.constants';
import {
  type InitializeModel,
  type InitializeParamsModel,
} from '@lib/backend/setup/utils/initialize/initialize.models';

export const initialize = async ({ database }: InitializeParamsModel): Promise<InitializeModel> => {
  const result: InitializeModel = {};
  if (database) {
    const { Database } = await import('@lib/backend/database/utils/Database/Database');
    const databaseF = new Database(database);
    await databaseF.connect();
    Container.set(Database, databaseF, DATABASE_TYPE.MONGO);
    result.database = databaseF;
  }
  return result;
};
