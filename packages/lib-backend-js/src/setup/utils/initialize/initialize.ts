import 'reflect-metadata';

import { DATABASE_TYPE } from '@lib/backend/database/database.constants';
import { Database } from '@lib/backend/database/utils/Database/Database';
import {
  type InitializeModel,
  type InitializeParamsModel,
} from '@lib/backend/setup/utils/initialize/initialize.models';
import { Container } from '@lib/shared/core/utils/Container/Container';
import { logger } from '@lib/shared/logging/utils/Logger/Logger';

let result: InitializeModel;

export const initialize = async ({ database }: InitializeParamsModel): Promise<InitializeModel> => {
  if (!result) {
    result = {};
    if (database) {
      try {
        const databaseF = new Database(database);
        await databaseF.connect();
        Container.set(Database, databaseF, DATABASE_TYPE.MONGO);
        result.database = databaseF;
      } catch (e) {
        logger.warn(`failed to connect to ${database.host} with error: ${e as Error}`);
      }
    }
  }

  return result;
};
