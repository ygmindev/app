import lintConfig from '@lib/config/python/lint/lint';
import { type TaskParamsModel } from '@tool/task/core/core.models';

export const lint: TaskParamsModel<unknown> = {
  name: 'lint',

  task: [
    () => {
      const { command, ...config } = lintConfig.params();
      return command(config);
    },
  ],
};
