import 'reflect-metadata';

import { DatabaseMongo } from '@lib/backend/database/utils/DatabaseMongo/DatabaseMongo';
import { Container } from '@lib/shared/core/utils/Container/Container';
import { initialize as initializeBase } from '@lib/shared/setup/utils/initialize/initialize';

let isInitialized = false;

export const initialize = async (): Promise<void> => {
  if (!isInitialized) {
    await initializeBase();
    await Container.get(DatabaseMongo).initialize();
    isInitialized = true;
  }
};
