import 'reflect-metadata';

import { Environment } from '@lib/backend/environment/utils/Environment/Environment';
import { Server } from '@lib/backend/server/utils/Server/Server';
import { handleHmr } from '@lib/shared/core/utils/handleHmr/handleHmr';

import { serverConfig } from './config/server';

export const __hmrBoundary = true;

const environment = new Environment();
await environment.initialize();

const server = new Server(serverConfig.params());

await handleHmr({
  onDispose: async () => {
    await server.close();
  },
  onInitialize: async () => {
    await server.run();
  },
});
