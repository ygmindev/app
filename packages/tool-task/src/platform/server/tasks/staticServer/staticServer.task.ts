import { fromRoot } from '#lib-backend/file/utils/fromRoot/fromRoot';
import { type TaskParamsModel } from '#tool-task/core/core.models';
import { prompt } from '#tool-task/core/utils/prompt/prompt';
import { PROMPT_TYPE } from '#tool-task/core/utils/prompt/prompt.constants';
import { runServer } from '#tool-task/platform/server/utils/runServer/runServer';

const staticServer: TaskParamsModel = {
  name: 'staticServer',

  task: async () => {
    const { path, port } = await prompt([
      { basePath: fromRoot(), key: 'path', type: PROMPT_TYPE.DIRECTORY },
      { isOptional: true, key: 'port', type: PROMPT_TYPE.INPUT },
    ]);
    return runServer({ isOpen: true, path, port, root: fromRoot() });
  },
};

export default staticServer;
