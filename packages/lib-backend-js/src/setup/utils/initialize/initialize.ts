import 'reflect-metadata';

import { DATABASE_TYPE } from '@lib/backend/database/database.constants';
import { Database } from '@lib/backend/database/utils/Database/Database';
import { seed } from '@lib/backend/database/utils/seed/seed';
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

export const initialize = async (
  { database = databaseConfig.params() }: InitializeParamsModel = {
    database: databaseConfig.params(),
  },
): Promise<InitializeModel> => {
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
    if (database) {
      try {
        const db = new Database(database);
        await db.connect();
        Container.set(Database, db, DATABASE_TYPE.MONGO);

        if (process.env.NODE_ENV === 'test') {
          const { cleanUp: cleanUpSeed } = await seed();
          cleanUps.unshift(cleanUpSeed);
        }

        result.database = db;
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
