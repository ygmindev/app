import { fromGlobs } from '@lib/backend/file/utils/fromGlobs/fromGlobs';
import { mapSequence } from '@lib/shared/core/utils/mapSequence/mapSequence';
import { ENVIRONMENT } from '@lib/shared/environment/environment.constants';
import { appPrompt } from '@tool/task/core/utils/appPrompt/appPrompt';
import { buildTask } from '@tool/task/core/utils/buildTask/buildTask';
import { execute } from '@tool/task/core/utils/execute/execute';
import { RUN_PYTHON } from '@tool/task/python/tasks/runPython/runPython.constants';
import {
  type RunPythonModel,
  type RunPythonParamsModel,
} from '@tool/task/python/tasks/runPython/runPython.models';
import isString from 'lodash/isString';

export const runPython = buildTask<RunPythonParamsModel, RunPythonModel>({
  context: {
    environment: ENVIRONMENT.DEVELOPMENT,
  },

  name: RUN_PYTHON,

  prompts: [appPrompt({ defaultValue: 'service_server' })],

  task: async ({ pathname = './src/index.py', patterns }, context) => {
    if (patterns) {
      const pathnames = fromGlobs(
        isString(patterns) ? patterns.split(',').map((v) => v.trim()) : patterns,
        { root: context?.root },
      );
      await mapSequence(
        pathnames.map(
          (v) => async () => runPython({ app: context?.app ?? '', pathname: v }, context),
        ),
      );
    } else {
      await execute({ command: `PYTHONUNBUFFERED=1 uv run python ${pathname}` });
    }
  },
});
