import 'reflect-metadata';

import { DATABASE_TYPE } from '@lib/backend/database/database.constants';
import { Database } from '@lib/backend/database/utils/Database/Database';
import {
  type InitializeModel,
  type InitializeParamsModel,
} from '@lib/backend/setup/utils/initialize/initialize.models';
import { config as databaseConfig } from '@lib/config/database/database.mongo';
import { Container } from '@lib/shared/core/utils/Container/Container';
import { handleCleanup } from '@lib/shared/core/utils/handleCleanup/handleCleanup';
import { PubSub } from '@lib/shared/core/utils/PubSub/PubSub';
import { logger } from '@lib/shared/logging/utils/Logger/Logger';

let result: InitializeModel;

export const initialize = async ({
  database,
}: InitializeParamsModel = {}): Promise<InitializeModel> => {
  const databaseF = database ?? databaseConfig.params();

  const cleanUps: Array<() => Promise<void>> = [
    async () => Container.get(PubSub).close(),
    async () => Container.get(Database, DATABASE_TYPE.MONGO)?.close(),
  ];

  const onCleanUp = async (): Promise<void> => {
    for (const cleanUp of cleanUps) {
      await cleanUp();
    }
  };

  await handleCleanup({ onCleanUp });
  if (!result) {
    result = {};
    if (databaseF) {
      try {
        const db = new Database(databaseF);
        await db.connect();
        Container.set(Database, db, DATABASE_TYPE.MONGO);
        result.database = db;
      } catch (e) {
        logger.raise(`Failed to connect to ${databaseF.host}`, e);
      }
    }
  }

  return {
    ...result,

    cleanUp: onCleanUp,
  };
};
