import { fromGlobs } from '@lib/backend/file/utils/fromGlobs/fromGlobs';
import { fromPackages } from '@lib/backend/file/utils/fromPackages/fromPackages';
import { ENVIRONMENT } from '@lib/shared/environment/environment.constants';
import { appPrompt } from '@tool/task/core/utils/appPrompt/appPrompt';
import { buildTask } from '@tool/task/core/utils/buildTask/buildTask';
import { execute } from '@tool/task/core/utils/execute/execute';
import {
  type RunServerModel,
  type RunServerParamsModel,
} from '@tool/task/python/tasks/runServer/runServer.models';

export const runServer = buildTask<RunServerParamsModel, RunServerModel>({
  context: {
    environment: ENVIRONMENT.DEVELOPMENT,
  },

  prompts: [appPrompt({ defaultValue: 'service_server' })],

  task: async ({ pathname = './src/index.py' }) => {
    const port = process.env.SERVER_APP_PYTHON_PORT;
    let reloadDirs = fromGlobs(['*-py'], { isAbsolute: true, root: fromPackages() });
    reloadDirs = reloadDirs.length ? reloadDirs.map((v) => `--reload-dir ${v}/src`) : [];
    await execute({
      command: `PYTHONUNBUFFERED=1 uv run uvicorn src.index:app --port ${port} --reload ${reloadDirs.join(' ')}`,
    });
  },
});
