if (process.env.NODE_ENV === 'production') {
  await import(fromWorking('__dist__/server/entry.mjs'));
}

import 'reflect-metadata';

import { ServerApp } from '@lib/backend/app/utils/ServerApp/ServerApp';
import { fromWorking } from '@lib/backend/file/utils/fromWorking/fromWorking';

import { name } from '../package.json';
import { databaseConfig } from './config/database';
import { serverConfig } from './config/server';

const app = new ServerApp({
  database: () => databaseConfig.params(),
  name,
  server: () => serverConfig.params(),
});

export const { cleanUp } = app;
await app.run();
