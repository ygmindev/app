import 'reflect-metadata';

import { DATABASE_TYPE } from '@lib/backend/database/database.constants';
import { Database } from '@lib/backend/database/utils/Database/Database';
import { cleanup } from '@lib/backend/setup/utils/cleanup/cleanup';
import {
  type InitializeModel,
  type InitializeParamsModel,
} from '@lib/backend/setup/utils/initialize/initialize.models';
import { config as databaseConfig } from '@lib/config/database/database.mongo';
import { Container } from '@lib/shared/core/utils/Container/Container';
import { handleCleanup } from '@lib/shared/core/utils/handleCleanup/handleCleanup';
import { logger } from '@lib/shared/logging/utils/Logger/Logger';

let result: InitializeModel;

export const initialize = async (
  { database = databaseConfig.params() }: InitializeParamsModel = {
    database: databaseConfig.params(),
  },
): Promise<InitializeModel> => {
  const onCleanUp = async (): Promise<void> => {
    await cleanup();
  };

  await handleCleanup({ onCleanUp });

  if (!result) {
    result = {};
    if (database) {
      try {
        const databaseF = new Database(database);
        await databaseF.connect();
        Container.set(Database, databaseF, DATABASE_TYPE.MONGO);
        result.database = databaseF;
      } catch (e) {
        logger.raise(`Failed to connect to ${database.host}`, e);
      }
    }
  }

  return {
    ...result,

    cleanUp: onCleanUp,
  };
};
