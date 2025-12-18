import 'reflect-metadata';

import { Server } from '@lib/backend/server/utils/Server/Server';

import { serverConfig } from './config/server';

const server = new Server(serverConfig.params());
export const { cleanUp } = server;

await server.run();
