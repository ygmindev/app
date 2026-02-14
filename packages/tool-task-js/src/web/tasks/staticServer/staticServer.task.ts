import { ENVIRONMENT } from '@lib/shared/environment/environment.constants';
import { buildTask } from '@tool/task/core/utils/buildTask/buildTask';
import { execute } from '@tool/task/core/utils/execute/execute';
import { STATIC_SERVER } from '@tool/task/web/tasks/staticServer/staticServer.constants';
import {
  type StaticServerModel,
  type StaticServerParamsModel,
} from '@tool/task/web/tasks/staticServer/staticServer.models';

export const staticServer = buildTask<StaticServerParamsModel, StaticServerModel>({
  context: {
    environment: ENVIRONMENT.DEVELOPMENT,
  },

  name: STATIC_SERVER,

  task: async ({ host, isOpen = true, pathname, port }) => {
    const hostF = host ?? process.env.SERVER_APP_STATIC_HOST;
    const portF = port ?? process.env.SERVER_APP_STATIC_PORT;
    await execute({
      command: `http-server ${pathname} ${hostF ? `-a ${hostF}` : ''} --cors --port ${portF} ${
        isOpen ? '--o' : ''
      }`,
    });
  },
});
