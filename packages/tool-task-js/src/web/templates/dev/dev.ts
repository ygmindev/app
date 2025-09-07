import { Server } from '@lib/backend/server/utils/Server/Server';
import { initialize as initializeBackend } from '@lib/backend/setup/utils/initialize/initialize';
import { config as serverConfig } from '@lib/config/node/server/server.web';
import { ENVIRONMENT } from '@lib/shared/environment/environment.constants';
import { type TaskParamsModel } from '@tool/task/core/core.models';

export const dev: TaskParamsModel<unknown> = {
  environment: ENVIRONMENT.DEVELOPMENT,

  name: 'dev',

  // task: [async ({ root }) => new Server(serverConfig.params()).run()],
  task: [
    async ({ root }) => {
      const { cleanUp } = await initializeBackend();
      try {
        await new Server(serverConfig.params()).run();
      } finally {
        await cleanUp?.();
      }
    },
  ],
};
