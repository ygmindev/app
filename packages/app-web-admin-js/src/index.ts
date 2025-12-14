import 'reflect-metadata';

import { Server } from '@lib/backend/server/utils/Server/Server';

import { serverConfig } from './config/server';

const server = new Server(serverConfig.params());
await server.run();
