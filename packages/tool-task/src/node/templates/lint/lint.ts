import { fromExecutable } from '@lib/backend/file/utils/fromExecutable/fromExecutable';
import lintConfig from '@lib/config/node/lint/lint';
import { TASK_STATUS } from '@tool/task/core/core.constants';
import type { TaskParamsModel } from '@tool/task/core/core.models';
import { command } from '@tool/task/core/utils/command/command';

export const lint: TaskParamsModel = {
  name: 'lint',

  task: async ({ root }) => {
    const typescriptResult = await command(`${fromExecutable('tsc')} --project tsconfig.json`, {
      root,
    });
    if (typescriptResult.status === TASK_STATUS.ERROR) {
      return typescriptResult;
    }
    return await lintConfig.run({ config: lintConfig.config, root });
  },
};
