import 'reflect-metadata';

import { Server } from '@lib/backend/server/utils/Server/Server';

import { serverConfig } from './config/server';

export const app = new Server(serverConfig.params()).run();
