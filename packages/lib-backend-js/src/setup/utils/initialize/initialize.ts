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

let isInitialized: boolean = false;

export const initialize = async ({
  database,
}: InitializeParamsModel = {}): Promise<InitializeModel> => {
  if (!isInitialized) {
    isInitialized = true;
    const environment = new Environment();
    await environment.initialize();
    Container.set(Environment, environment);

    const databaseF = database?.();
    try {
      const pubSub = new PubSub(pubSubConfig.params());
      await pubSub.initialize();
      Container.set(PubSub, pubSub);
    } catch {}

    if (databaseF) {
      try {
        const db = new Database(databaseF);
        await db.initialize();
        Container.set(Database, db, DATABASE_TYPE.MONGO);
      } catch {}
    }
  }
};
