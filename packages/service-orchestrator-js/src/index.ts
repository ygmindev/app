import { Environment } from '@lib/backend/environment/utils/Environment/Environment';
import { Server } from '@lib/backend/server/utils/Server/Server';

import { serverConfig } from './config/server';

const environment = new Environment();
await environment.initialize();

export const app = new Server(serverConfig.params()).run();
