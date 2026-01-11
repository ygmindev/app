import { WorkerApp } from '@lib/backend/app/utils/WorkerApp/WorkerApp';

import { name } from '../package.json';
import { databaseConfig } from './config/database';

const app = new WorkerApp({
  database: () => databaseConfig.params(),
  name,
});

export const { cleanUp } = app;
await app.run();
