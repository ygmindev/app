import { appPrompt } from '@tool/task/core/utils/appPrompt/appPrompt';
import { buildTask } from '@tool/task/core/utils/buildTask/buildTask';
import { execute } from '@tool/task/core/utils/execute/execute';
import {
  type RunPythonModel,
  type RunPythonParamsModel,
} from '@tool/task/python/tasks/runPython/runPython.models';

export const runPython = buildTask<RunPythonParamsModel, RunPythonModel>({
  prompts: [appPrompt({ defaultApp: 'service_server' })],

  task: async ({ pathname = './src/index.py' }) => {
    await execute({ command: `poetry run python ${pathname}` });
  },
});
