import 'reflect-metadata';

import { Environment } from '@lib/backend/environment/utils/Environment/Environment';
import { Server } from '@lib/backend/server/utils/Server/Server';

import { serverConfig } from './config/server';

const environment = new Environment();
await environment.initialize();

const server = new Server(serverConfig.params());

await server.run();
