import 'reflect-metadata';

import { Server } from '@lib/backend/server/utils/Server/Server';
import { initialize } from '@lib/backend/setup/utils/initialize/initialize';

import { databaseConfig } from './config/database';
import { serverConfig } from './config/server';

await initialize({ database: () => databaseConfig.params() });

const server = new Server(serverConfig.params());
await server.run();
