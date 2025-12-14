import 'reflect-metadata';

import { DATABASE_TYPE } from '@lib/backend/database/database.constants';
import { Database } from '@lib/backend/database/utils/Database/Database';
import { Environment } from '@lib/backend/environment/utils/Environment/Environment';
import {
  type InitializeModel,
  type InitializeParamsModel,
} from '@lib/backend/setup/utils/initialize/initialize.models';
import { pubSubConfig } from '@lib/config/pubSub/pubSub';
import { Container } from '@lib/shared/core/utils/Container/Container';
import { PubSub } from '@lib/shared/core/utils/PubSub/PubSub';
import { sleep } from '@lib/shared/core/utils/sleep/sleep';
import { logger } from '@lib/shared/logging/utils/Logger/Logger';

let result: InitializeModel;

export const initialize = async ({ database }: InitializeParamsModel): Promise<InitializeModel> => {
  await new Environment().initialize();
  const databaseF = database();

  if (!result) {
    result = {};

    try {
      await sleep(5000);
      const pubSub = new PubSub(pubSubConfig.params());
      await pubSub.initialize();
      Container.set(PubSub, pubSub);
    } catch (e) {
      logger.warn(`Failed to connect to pubSub`, e);
    }

    try {
      const db = new Database(databaseF);
      await db.initialize();
      Container.set(Database, db, DATABASE_TYPE.MONGO);
      result.database = db;
    } catch (e) {
      logger.fail(`Failed to connect to ${databaseF.host}`, e);
    }
  }

  return {
    ...result,
  };
};
