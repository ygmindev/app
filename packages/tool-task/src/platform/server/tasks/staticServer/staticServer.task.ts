import { fromRoot } from '#lib-backend/file/utils/fromRoot/fromRoot';
import { type TaskParamsModel } from '#tool-task/core/core.models';
import { PROMPT_TYPE } from '#tool-task/core/utils/prompt/prompt.constants';
import { type StaticServerParamsModel } from '#tool-task/platform/server/tasks/staticServer/staticServer.models';
import { runServer } from '#tool-task/platform/server/utils/runServer/runServer';

const staticServer: TaskParamsModel<StaticServerParamsModel> = {
  name: 'staticServer',

  options: [
    { basePath: fromRoot(), key: 'path', type: PROMPT_TYPE.DIRECTORY },
    { isOptional: true, key: 'port', type: PROMPT_TYPE.INPUT },
  ],

  task: [
    async ({ options }) => {
      if (options) {
        const { path, port } = options;
        runServer({ isOpen: true, path, port });
      }
    },
  ],
};

export default staticServer;
