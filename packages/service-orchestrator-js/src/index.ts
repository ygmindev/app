import 'reflect-metadata';

import { Server } from '@lib/backend/server/utils/Server/Server';
import { config as serverConfig } from '@lib/config/node/server/server.orchestrator';

export const app = new Server(serverConfig.params()).run();
